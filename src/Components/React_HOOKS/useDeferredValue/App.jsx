// useDeferredValue — откладывает обновление некритичной части UI.
// Поиск отображает устаревший список пока вводишь текст — интерфейс остаётся отзывчивым.

import { useState, useDeferredValue, memo } from 'react';
import './App.css';

const ITEMS = Array.from({ length: 10000 }, (_, i) => `Элемент #${i + 1}`);

const SlowList = memo(function SlowList({ query }) {
  const filtered = query
    ? ITEMS.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    : ITEMS.slice(0, 50);

  return (
    <ul className="result-list">
      {filtered.slice(0, 100).map((item) => (
        <li key={item}>{item}</li>
      ))}
      {filtered.length > 100 && (
        <li className="more">...ещё {filtered.length - 100} результатов</li>
      )}
      {filtered.length === 0 && <li className="empty">Ничего не найдено</li>}
    </ul>
  );
});

export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const isStale = query !== deferredQuery;

  return (
    <div className="box">
      <h1>useDeferredValue</h1>
      <p className="desc">
        <code>deferredQuery</code> отстаёт от <code>query</code> — React сначала
        обновляет 'input', потом (в фоне) перефильтровывает список из 10 000 элементов.
      </p>
      <input
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск по 10 000 элементам..."
      />
      <div className="status">
        <span>Введено: <code>{query || '—'}</code></span>
        <span className={isStale ? 'stale' : 'fresh'}>
          {isStale ? '⏳ обновляется...' : '✅ актуально'}
        </span>
      </div>
      <div style={{ opacity: isStale ? 0.5 : 1, transition: 'opacity 0.2s' }}>
        <SlowList query={deferredQuery} />
      </div>
    </div>
  );
}
