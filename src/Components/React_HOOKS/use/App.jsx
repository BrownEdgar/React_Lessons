////////////////////////////////////////////////////////////////////////////////
// use Hook - React 19 Hook
// Универсальный хук для работы с промисами и контекстами
// Позволяет читать значения из контекста или промисов
////////////////////////////////////////////////////////////////////////////////
import { use, createContext, useState } from 'react';
import './App.scss';

// Создаем контекст для демонстрации
const UserContext = createContext(null);
const ThemeContext = createContext('light');

// Компонент для работы с контекстом через use
function UserProfile() {
  const user = use(UserContext);
  const theme = use(ThemeContext);

  return (
    <div className={`user-profile ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h3>Профиль пользователя</h3>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Тема:</strong> {theme}</p>
    </div>
  );
}

// Компонент для работы с промисами через use
function AsyncData({ promise }) {
  const data = use(promise);

  return (
    <div className='async-data'>
      <h3>Асинхронные данные</h3>
      <p><strong>Заголовок:</strong> {data.title}</p>
      <p><strong>Описание:</strong> {data.body}</p>
      <p><strong>ID:</strong> {data.id}</p>
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
        body: 'Это данные, загруженные асинхронно через use хук'
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
    <div className='app'>
      <h1>use Hook (React 19)</h1>

      <div className='section'>
        <h2>1. Работа с контекстом</h2>
        <UserContext.Provider value={{ name: 'Иван Петров', email: 'ivan@example.com' }}>
          <ThemeContext.Provider value="dark">
            <UserProfile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>

      <div className='section'>
        <h2>2. Работа с промисами</h2>
        <button
          onClick={handleLoadAsync}
          disabled={showAsync}
          className='load-button'
        >
          {showAsync ? 'Загрузка...' : 'Загрузить асинхронные данные'}
        </button>

        {showAsync && promise && (
          <AsyncData promise={promise} />
        )}
      </div>

      <div className='info-section'>
        <h3>Что делает use хук:</h3>
        <ul>
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