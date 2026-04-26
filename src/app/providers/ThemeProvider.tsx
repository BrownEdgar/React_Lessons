// Провайдер темы Radix UI — оборачивает всё приложение в <Theme>
// Читает текущую тему из useThemeStore и применяет appearance (dark/light)
// Docs: https://www.radix-ui.com/themes/docs/theme/dark-mode

import { Theme } from '@radix-ui/themes';
import { useEffect, type ReactNode } from 'react';
import { useThemeStore } from '@features/theme-toggle';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { appearance } = useThemeStore();

  // Синхронизируем класс "dark" на <html> для Tailwind dark:-утилит
  useEffect(() => {
    document.documentElement.classList.toggle('dark', appearance === 'dark');
  }, [appearance]);

  return (
    <Theme
      appearance={appearance}
      accentColor="violet"
      grayColor="slate"
      radius="medium"
      scaling="100%"
    >
      {children}
    </Theme>
  );
};
