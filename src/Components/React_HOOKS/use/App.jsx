////////////////////////////////////////////////////////////////////////////////
// use Hook - React 19 Hook
// Универсальный хук для работы с промисами и контекстами
// Позволяет читать значения из контекста или промисов
////////////////////////////////////////////////////////////////////////////////
import { use, createContext, useState } from 'react';

// Создаем контекст для демонстрации
const UserContext = createContext(null);
const ThemeContext = createContext('light');

// Компонент для работы с контекстом через use
function UserProfile() {
  const user = use(UserContext);
  const theme = use(ThemeContext);

  return (
    <div
      style={{
        padding: '15px',
        backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
        color: theme === 'dark' ? '#fff' : '#000',
        borderRadius: '8px',
        margin: '10px 0',
      }}
    >
      <h3>Профиль пользователя</h3>
      <p>
        <strong>Имя:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Тема:</strong> {theme}
      </p>
    </div>
  );
}

// Компонент для работы с промисами через use
function AsyncData({ promise }) {
  const data = use(promise);

  return (
    <div
      style={{
        padding: '15px',
        backgroundColor: '#e7f3ff',
        border: '1px solid #b3d9ff',
        borderRadius: '8px',
        margin: '10px 0',
      }}
    >
      <h3>Асинхронные данные</h3>
      <p>
        <strong>Заголовок:</strong> {data.title}
      </p>
      <p>
        <strong>Описание:</strong> {data.body}
      </p>
      <p>
        <strong>ID:</strong> {data.id}
      </p>
    </div>
  );
}

// Функция для создания промиса с данными
function createDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Пример асинхронных данных',
        body: 'Это данные, загруженные асинхронно через use хук',
      });
    }, 2000);
  });
}

export default function App() {
  const [showAsync, setShowAsync] = useState(false);
  const [promise, setPromise] = useState(null);

  const handleLoadAsync = () => {
    setPromise(createDataPromise());
    setShowAsync(true);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>use Hook (React 19)</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>1. Работа с контекстом</h2>
        <UserContext.Provider
          value={{ name: 'Иван Петров', email: 'ivan@example.com' }}
        >
          <ThemeContext.Provider value='dark'>
            <UserProfile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>2. Работа с промисами</h2>
        <button
          onClick={handleLoadAsync}
          disabled={showAsync}
          style={{
            padding: '10px 20px',
            backgroundColor: showAsync ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: showAsync ? 'not-allowed' : 'pointer',
            marginBottom: '15px',
          }}
        >
          {showAsync ? 'Загрузка...' : 'Загрузить асинхронные данные'}
        </button>

        {showAsync && promise && <AsyncData promise={promise} />}
      </div>

      <div
        style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #dee2e6',
        }}
      >
        <h3>Что делает use хук:</h3>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>Универсальный хук для чтения значений из контекстов</li>
          <li>Может работать с промисами (асинхронными данными)</li>
          <li>Автоматически обрабатывает состояния загрузки</li>
          <li>Упрощает работу с асинхронными компонентами</li>
          <li>Поддерживает Suspense для показа fallback во время загрузки</li>
        </ul>
      </div>
    </div>
  );
}
