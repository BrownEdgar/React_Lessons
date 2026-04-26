// Стор для управления темой (dark/light) без Zustand
// Паттерн: module-level переменная + Set слушателей (Observer)
// Сохраняет предпочтение в localStorage между сессиями
// Docs: https://www.radix-ui.com/themes/docs/theme/dark-mode

import { useState, useEffect } from 'react';
import type { Appearance } from '@shared/types';

const STORAGE_KEY = 'radix-theme';

const getInitialTheme = (): Appearance => {
  const saved = localStorage.getItem(STORAGE_KEY) as Appearance | null;
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

let globalAppearance: Appearance = getInitialTheme();
const listeners = new Set<() => void>();

const notify = () => listeners.forEach((fn) => fn());

export const useThemeStore = () => {
  const [appearance, setAppearance] = useState<Appearance>(globalAppearance);

  useEffect(() => {
    const handler = () => setAppearance(globalAppearance);
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
    };
  }, []);

  const toggleAppearance = () => {
    globalAppearance = globalAppearance === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, globalAppearance);
    notify();
  };

  return { appearance, toggleAppearance };
};
