// useSyncExternalStore — подписывает компонент на внешнее хранилище данных.
// Используй вместо useEffect + useState при интеграции с Redux, Zustand,


import { useSyncExternalStore } from 'react';
import './App.css';
import { store } from './store';

// Подписка на весь стор
function useStore() {
  return useSyncExternalStore(store.subscribe, store.getSnapshot);
}

// Подписка только на одно поле — компонент ре-рендерится лишь при его изменении
function useCount() {
  return useSyncExternalStore(store.subscribe, () => store.getSnapshot().count);
}

function Counter() {
  const count = useCount();
  return (
    <div className="card">
      <h2>Counter (подписан только на count)</h2>
      <p className="big-num">{count}</p>
      <div className="btn-row">
        <button onClick={store.decrement}>−</button>
        <button onClick={store.increment}>+</button>
      </div>
    </div>
  );
}

function ThemePanel() {
  const { theme } = useStore();
  return (
    <div className="card" data-theme={theme}>
      <h2>Тема</h2>
      <p>Текущая тема: <strong>{theme}</strong></p>
      <button onClick={store.toggleTheme}>Переключить тему</button>
    </div>
  );
}

const USERS = ['Алиса', 'Боб', 'Карен', 'Давид'];

function UserPanel() {
  const { user } = useStore();
  return (
    <div className="card">
      <h2>Пользователь</h2>
      <p>Текущий: <strong>{user}</strong></p>
      <div className="btn-row wrap">
        {USERS.map((u) => (
          <button
            key={u}
            onClick={() => store.setUser(u)}
            className={user === u ? 'active' : ''}
          >
            {u}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="box">
      <h1>useSyncExternalStore</h1>
      <p className="desc">
        Три компонента подписаны на один внешний стор (без Context и без props).
        Изменение одного поля ре-рендерит только нужные компоненты.
      </p>
      <div className="panels">
        <Counter />
        <ThemePanel />
        <UserPanel />
      </div>
    </div>
  );
}
