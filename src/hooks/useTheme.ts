'use client';

import { useState, useEffect } from 'react';
import { getInitialTheme, applyTheme, toggleTheme, type Theme } from '@/lib/theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    applyTheme(theme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const storedTheme = localStorage.getItem('site-theme');
      if (!storedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggle = () => {
    const newTheme = toggleTheme(theme);
    setTheme(newTheme);
  };

  return {
    theme,
    toggle,
    isDark: theme === 'dark',
    mounted, // Para evitar hydration mismatch
  };
};

