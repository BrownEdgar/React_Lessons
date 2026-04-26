// Точка входа React-приложения — инициализирует React 19 через createRoot
// Импортирует глобальные стили (Tailwind + Radix) до монтирования

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/global.css';
import { App } from './app/App';

const container = document.getElementById('root');
if (!container) throw new Error('Не найден элемент #root');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
