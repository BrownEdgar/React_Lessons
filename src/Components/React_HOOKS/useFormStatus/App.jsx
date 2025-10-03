////////////////////////////////////////////////////////////////////////////////
// useFormStatus - React 19 Hook
// Предоставляет информацию о статусе формы (отправка, ожидание)
// Работает только внутри <form> компонента
////////////////////////////////////////////////////////////////////////////////
import { useFormStatus } from 'react';
import './App.scss';

// Компонент кнопки, который использует useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className='submit-button'
    >
      {pending ? 'Отправка...' : 'Отправить'}
    </button>
  );
}

// Компонент индикатора загрузки
function LoadingIndicator() {
  const { pending, method, action } = useFormStatus();

  if (!pending) return null;

  return (
    <div className='loading-indicator'>
      <div className='loading-text'>⏳ Отправка формы...</div>
      <div className='loading-details'>
        Метод: {method} | Действие: {action}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className='app'>
      <h1>useFormStatus Hook (React 19)</h1>

      <form
        action={async (formData) => {
          // Имитация асинхронной отправки
          await new Promise(resolve => setTimeout(resolve, 3000));

          const name = formData.get('name');
          const email = formData.get('email');

          alert(`Форма отправлена!\nИмя: ${name}\nEmail: ${email}`);
        }}
        className='form'
      >
        <LoadingIndicator />

        <div className='form-group'>
          <label>
            Имя:
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Введите ваше имя"
          />
        </div>

        <div className='form-group'>
          <label>
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Введите ваш email"
          />
        </div>

        <SubmitButton />

        <div className='info-section'>
          <h3>Что делает useFormStatus:</h3>
          <ul>
            <li>Предоставляет информацию о статусе отправки формы</li>
            <li>Работает только внутри компонента &lt;form&gt;</li>
            <li>Показывает pending состояние во время отправки</li>
            <li>Возвращает метод и действие формы</li>
          </ul>
        </div>
      </form>
    </div>
  );
}