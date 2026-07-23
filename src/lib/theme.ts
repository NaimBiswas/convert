export function initTheme(): void {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') { document.documentElement.classList.add('dark'); return; }
  if (stored === 'light') { document.documentElement.classList.remove('dark'); return; }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }
}

export function toggleTheme(): void {
  const root = document.documentElement;
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
}
