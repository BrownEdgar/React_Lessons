// ✅ ХОРОШО: UserList зависит от абстракции (функция fetchUsers), а не от конкретной реализации.
import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import { PrinciplePage, PrinciplePanel } from '../../shared/PrincipleLayout';

// Компонент зависит от абстракции — функции fetchUsers
// Он не знает и не должен знать: axios это, fetch, или мок
function UserList({ fetchUsers }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data.slice(0, 5));
      setLoading(false);
    });
  }, [fetchUsers]);

  if (loading) return <p className="user-list-loading">Загрузка...</p>;

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-list__item">
          <strong>{user.name}</strong>
          <span className="user-list__email">{user.email}</span>
        </li>
      ))}
    </ul>
  );
}

// Реализация 1: реальный API через axios
const fetchFromAPI = () =>
  axios.get('https://jsonplaceholder.typicode.com/users').then((r) => r.data);

// Реализация 2: мок для тестов — та же «форма», другое содержимое
const fetchMock = () =>
  Promise.resolve([
    { id: 1, name: 'Тестовый пользователь', email: 'test@example.com' },
    { id: 2, name: 'Мок-пользователь', email: 'mock@example.com' },
    { id: 3, name: 'Данные без сети', email: 'offline@example.com' },
  ]);

export function App() {
  return (
    <PrinciplePage>
      <h1 className="Title">
        <span>D</span>ependency Inversion — ✅ GOOD
      </h1>

      {/* ───── Что такое принцип ───── */}
      <PrinciplePanel variant="info">
        <h2>📖 Dependency Inversion Principle (DIP)</h2>
        <p>
          <strong>Зависи от абстракций, а не от конкретных реализаций.</strong> Компонент принимает{' '}
          <em>функцию</em> <code>fetchUsers</code> — ему всё равно, что внутри: axios, fetch,
          GraphQL или моки.
        </p>
        <p>
          Модули высокого уровня не должны зависеть от модулей низкого уровня. Оба должны зависеть от абстракций.
          Конкретная реализация «инжектируется» снаружи — это и есть{' '}
          <strong>Dependency Injection</strong>. Компонент остаётся чистым, тестируемым и
          независимым от инфраструктурных деталей.
        </p>
      </PrinciplePanel>

      {/* ───── Что конкретно хорошо ───── */}
      <PrinciplePanel variant="pointsGood">
        <h3>✅ Преимущества инверсии зависимостей:</h3>
        <ul>
          <li>
            Сменить <code>axios</code> на <code>fetch</code>? — напиши новую функцию{' '}
            <code>fetchFromFetch</code>, компонент не трогай
          </li>
          <li>
            Тест без реального HTTP? — передай <code>fetchMock</code>, не нужно мокировать axios
          </li>
          <li>Другой API или GraphQL? — новая функция снаружи, компонент без изменений</li>
          <li>Изолируй логику: компонент рендерит, функции — загружают. Чёткое разделение</li>
          <li>
            <code>UserList</code> — переиспользуем везде, просто меняя <code>fetchUsers</code>
          </li>
        </ul>
      </PrinciplePanel>

      {/* ───── Демо ───── */}
      <PrinciplePanel variant="demo">
        <p className="dip-demo-title">
          🎮 Тот же компонент <code>UserList</code> — разные источники данных:
        </p>
        <p className="dip-demo-subtitle">
          ✅ Ниже — данные из реального API. Закомментируй <code>fetchFromAPI</code> и
          раскомментируй <code>fetchMock</code> — компонент не изменится
        </p>

        <div className="dip-demo-grid">
          <div>
            <p className="dip-demo-label dip-demo-label--api">
              📡 <code>fetchFromAPI</code> — реальный HTTP:
            </p>
            {/* <UserList fetchUsers={fetchFromAPI} /> */}
          </div>
          <div>
            <p className="dip-demo-label dip-demo-label--mock">
              🧪 <code>fetchMock</code> — мок для тестов:
            </p>
            <UserList fetchUsers={fetchFromAPI} />
          </div>
        </div>
      </PrinciplePanel>

      {/* ───── Код ───── */}
      <PrinciplePanel variant="code">
        {`// Компонент зависит от абстракции (функции), не от axios
function UserList({ fetchUsers }) {
  useEffect(() => {
    fetchUsers().then(setUsers) // не знает, что внутри
  }, [fetchUsers])
}

// Реализации — снаружи компонента:
const fetchFromAPI = () => axios.get(URL).then(r => r.data)
const fetchMock    = () => Promise.resolve([{ id:1, name:'Тест' }])
const fetchGraphQL = () => gql\`query { users { id name } }\`

// Один компонент — любой источник данных:
<UserList fetchUsers={fetchFromAPI} />  // прод
<UserList fetchUsers={fetchMock} />     // тесты
<UserList fetchUsers={fetchGraphQL} />  // GraphQL`}
      </PrinciplePanel>
    </PrinciplePage>
  );
}
