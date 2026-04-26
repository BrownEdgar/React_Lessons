// Корневой компонент приложения — подключает провайдер темы и роутер
// BrowserRouter → ThemeProvider → AppRouter

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { AppRouter } from './router/AppRouter';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </BrowserRouter>
);
