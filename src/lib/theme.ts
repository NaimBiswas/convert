export function initTheme(): void {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') document.documentElement.classList.add('dark');
}

export function toggleTheme(): void {
  const root = document.documentElement;
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
}

export function getThemeIcon(): string {
  return document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
}
