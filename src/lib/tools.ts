export function generateRandomData(rowCount = 8, colCount = 5): string {
  const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry', 'Iris', 'Jack', 'Kate', 'Leo', 'Mia', 'Noah', 'Olivia'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
  const roles = ['Engineer', 'Designer', 'Manager', 'Analyst', 'Developer', 'Lead', 'Director', 'Coordinator'];
  const domains = ['acme.com', 'startup.io', 'data.co', 'tech.com', 'org.net', 'labs.io', 'global.com'];

  const headers = Array.from({ length: colCount }, (_, i) => {
    const names = ['name', 'email', 'age', 'role', 'active', 'score', 'department', 'start_date', 'salary', 'location'];
    return names[i] || `col_${i + 1}`;
  });

  const rows = Array.from({ length: rowCount }, () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const row: Record<string, unknown> = {};
    headers.forEach((h, i) => {
      switch (i) {
        case 0: row[h] = `${firstName} ${lastName}`; break;
        case 1: row[h] = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`; break;
        case 2: row[h] = Math.floor(Math.random() * 35) + 22; break;
        case 3: row[h] = roles[Math.floor(Math.random() * roles.length)]; break;
        case 4: row[h] = Math.random() > 0.3; break;
        case 5: row[h] = Math.round(Math.random() * 100) / 10; break;
        case 6: row[h] = ['Engineering', 'Design', 'Marketing', 'Sales', 'HR'][Math.floor(Math.random() * 5)]; break;
        case 7: row[h] = `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`; break;
        case 8: row[h] = Math.floor(Math.random() * 120 + 40) * 1000; break;
        default: row[h] = `val_${Math.random().toString(36).slice(2, 6)}`; break;
      }
    });
    return row;
  });

  const csv = [headers.join(','), ...rows.map(r => headers.map(h => String(r[h])).join(','))].join('\n');
  return csv;
}

export function encodeBase64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function decodeBase64(encoded: string): string {
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

export function encodeHex(text: string): string {
  return Array.from(new TextEncoder().encode(text)).map(b => b.toString(16).padStart(2, '0')).join(' ');
}

export function decodeHex(hex: string): string {
  const clean = hex.replace(/[^0-9a-fA-F\s]/g, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.some(h => h.length > 4 || h.length === 0)) {
    throw new Error('Invalid hex input');
  }
  const bytes = parts.map(h => parseInt(h, 16));
  return new TextDecoder().decode(new Uint8Array(bytes));
}
