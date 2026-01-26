export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'site-theme';

export const getStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return null;
};

export const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const getInitialTheme = (): Theme => {
  return getStoredTheme() || getSystemTheme();
};

export const applyTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

export const toggleTheme = (currentTheme: Theme): Theme => {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  return newTheme;
};

