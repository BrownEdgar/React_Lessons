// useDebugValue — добавляет метки к кастомным хукам в React DevTools.
// Не влияет на поведение — только на отображение при отладке.

import './App.css';
import { useOnlineStatus } from './useOnlineStatus';
import { useLocalStorage } from './useLocalStorage';

export default function App() {

  const isOnline = useOnlineStatus();
  const [theme, setTheme] = useLocalStorage('debug-theme', 'dark');
  const [count, setCount] = useLocalStorage('debug-count', 0);

  return (
    <div className="box" data-theme={theme}>
      <h1>useDebugValue</h1>
      <p className="desc">
        Открой <strong>React DevTools → Components</strong> и выбери этот
        компонент — кастомные хуки покажут свои метки.
      </p>

      <div className="card">
        <h2>useOnlineStatus</h2>
        <div className={`status-badge ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? '🟢 Онлайн' : '🔴 Офлайн'}
        </div>
        <p className="hint">
          В DevTools: <code>OnlineStatus: "🟢 Online"</code>
        </p>
      </div>

      <div className="card">
        <h2>useLocalStorage</h2>
        <div className="row">
          <span>Тема: <strong>{theme}</strong></span>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Переключить
          </button>
        </div>
        <div className="row">
          <span>Счётчик: <strong>{count}</strong></span>
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(0)}>Сброс</button>
        </div>
        <p className="hint">
          В DevTools: <code>LocalStorage: "debug-theme: \"dark\""</code>
        </p>
      </div>
    </div>
  );
}
