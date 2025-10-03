////////////////////////////////////////////////////////////////////////////////
// useActionState - React 19 Hook
// Управляет состоянием формы и обработкой асинхронных действий
// Заменяет useFormState и useFormStatus в React 19
////////////////////////////////////////////////////////////////////////////////
import { useActionState } from 'react';
import './App.scss';

// Асинхронная функция для отправки формы
async function submitForm(prevState, formData) {
  const username = formData.get('username');
  const password = formData.get('password');

  // Имитация API запроса
  await new Promise(resolve => setTimeout(resolve, 2000));

  if (username === 'admin' && password === 'password') {
    return { success: true, message: 'Успешный вход!' };
  } else {
    return { success: false, message: 'Неверные учетные данные' };
  }
}

export default function App() {
  const [state, dispatch, isPending] = useActionState(submitForm, null);

  return (
    <div className='app'>
      <h1>useActionState Hook (React 19)</h1>

      <form action={dispatch}>
        <div className='form-group'>
          <label>
            Username:
            <input
              type="text"
              name="username"
              required
              placeholder="admin"
            />
          </label>
        </div>

        <div className='form-group'>
          <label>
            Password:
            <input
              type="password"
              name="password"
              required
              placeholder="password"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className='submit-button'
        >
          {isPending ? 'Вход...' : 'Войти'}
        </button>
      </form>

      {state && (
        <div className={`message ${state.success ? 'success' : 'error'}`}>
          {state.message}
        </div>
      )}

      <div className='test-info'>
        <p><strong>Тестовые данные:</strong></p>
        <p>Username: admin</p>
        <p>Password: password</p>
      </div>
    </div>
  );
}