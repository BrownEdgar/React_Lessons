// ❌ ПЛОХО: UserList жёстко привязан к axios — высокоуровневый модуль зависит от низкоуровневого.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PrinciplePage, PrinciplePanel } from '../../shared/PrincipleLayout';
import './App.scss';

export function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Жёсткая зависимость: компонент знает про axios и конкретный URL
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data.slice(0, 5));
      setLoading(false);
    });
  }, []);

  return (
    <PrinciplePage>
      <h1 className="Title">
        <span>D</span>ependency Inversion — ❌ BAD
      </h1>

      {/* ───── Что такое принцип ───── */}
      <PrinciplePanel variant="info">
        <h2>📖 Dependency Inversion Principle (DIP)</h2>
        <p>
          <strong>
            Модули высокого уровня не должны зависеть от модулей низкого уровня. Оба должны зависеть
            от абстракций.
          </strong>{' '}
          В React: компонент (высокий уровень) не должен напрямую создавать или импортировать
          HTTP-клиенты, базы данных или другие конкретные реализации.
        </p>
        <p>
          Представь: ты хочешь сменить <code>axios</code> на нативный <code>fetch</code>, или на{' '}
          <code>React Query</code>, или хочешь запустить тест без реального API. Если компонент
          жёстко привязан к axios — тебе придётся лезть внутрь и переписывать его.
        </p>
      </PrinciplePanel>

      {/* ───── Что конкретно плохо ───── */}
      <PrinciplePanel variant="pointsBad">
        <h3>❌ Жёсткие зависимости в этом компоненте:</h3>
        <ul>
          <li>
            <code>import axios from 'axios'</code> — компонент <strong>знает</strong> про конкретный
            HTTP-клиент
          </li>
          <li>
            URL <code>jsonplaceholder.typicode.com/users</code> зашит прямо в UI-логику
          </li>
          <li>
            Сменить <code>axios</code> на <code>fetch</code>? — открывай компонент и переписывай
          </li>
          <li>Написать unit-тест без реального HTTP? — невозможно без мокинга всего axios</li>
          <li>Переиспользовать компонент с другим API? — только форком и правкой кода</li>
          <li>Это нарушение: высокоуровневый UI-компонент знает о деталях нижнего уровня</li>
        </ul>
      </PrinciplePanel>

      {/* ───── Демо ───── */}
      <PrinciplePanel variant="demo">
        <p className="dip-bad__demo-title">
          🎮 Список пользователей — данные получены через axios внутри компонента:
        </p>
        <p className="dip-bad__demo-warn">
          ⚠️ Источник данных зашит внутри — подменить его или отключить без правки компонента нельзя
        </p>
        {loading ? (
          <p className="dip-bad__demo-loading">Загрузка данных через axios...</p>
        ) : (
          <ul className="dip-bad__demo-list">
            {users.map((user) => (
              <li key={user.id} className="dip-bad__demo-item">
                <strong>{user.name}</strong>
                <span className="dip-bad__demo-email">{user.email}</span>
              </li>
            ))}
          </ul>
        )}
      </PrinciplePanel>

      {/* ───── Код ───── */}
      <PrinciplePanel variant="code">
        {`import axios from 'axios' // ← жёсткая зависимость от конкретной библиотеки

function App() {
  useEffect(() => {
    // ← компонент знает URL и HTTP-клиент — это детали нижнего уровня
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  }, [])

  // Хочешь сменить axios на fetch? → меняй этот компонент
  // Хочешь запустить тест?        → мокируй весь axios
  // Хочешь другой URL?            → снова меняй компонент
}`}
      </PrinciplePanel>
    </PrinciplePage>
  );
}
