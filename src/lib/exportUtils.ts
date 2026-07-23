import { stringifyJSON } from './converters/json';
import { stringifyCSV } from './converters/csv';

export function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

export function toHTMLTable(data: Record<string, unknown>[], headers: string[]): string {
  const thead = `<thead><tr>${headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead>`;
  const tbody = `<tbody>${data.map(row =>
    `<tr>${headers.map(h => `<td>${escapeHtml(String(row[h] ?? ''))}</td>`).join('')}</tr>`
  ).join('')}</tbody>`;
  return `<table border="1" cellpadding="6" cellspacing="0">${thead}${tbody}</table>`;
}

export function toMarkdown(data: Record<string, unknown>[], headers: string[]): string {
  const sep = `| ${headers.map(() => '---').join(' | ')} |`;
  const headerRow = `| ${headers.join(' | ')} |`;
  const bodyRows = data.map(row =>
    `| ${headers.map(h => String(row[h] ?? '').replace(/\|/g, '\\|')).join(' | ')} |`
  ).join('\n');
  return `${headerRow}\n${sep}\n${bodyRows}`;
}

export function toPDF(doc: any, data: Record<string, unknown>[], headers: string[]): void {
  try {
    const rows = data.map(row => headers.map(h => String(row[h] ?? '')));
    if (typeof doc.autoTable === 'function') {
      doc.autoTable({
        head: [headers],
        body: rows,
        styles: { fontSize: 8, cellPadding: 3 },
        headStyles: { fillColor: [200, 146, 30] },
        margin: { top: 20 },
      });
    } else {
      let y = 30;
      const lineHeight = 7;
      doc.setFontSize(8);
      const colWidths = headers.map(() => Math.min(60, 190 / headers.length));
      const drawRow = (cells: string[], isHeader: boolean) => {
        if (isHeader) doc.setFont('Helvetica', 'bold');
        else doc.setFont('Helvetica', 'normal');
        let x = 10;
        cells.forEach((cell, i) => {
          doc.text(cell, x + 1, y + 4);
          x += colWidths[i] || 40;
        });
        y += lineHeight;
      };
      drawRow(headers, true);
      rows.forEach(r => drawRow(r, false));
    }
  } catch { }
}

export function downloadBlob(data: BlobPart, filename: string, mime: string): void {
  const blob = new Blob([data], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
