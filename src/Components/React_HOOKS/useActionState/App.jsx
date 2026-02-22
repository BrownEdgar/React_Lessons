////////////////////////////////////////////////////////////////////////////////
// useActionState - React 19 Hook
// Управляет состоянием формы и обработкой асинхронных действий
// Заменяет useFormState и useFormStatus в React 19
////////////////////////////////////////////////////////////////////////////////
import { useActionState } from 'react';

// Асинхронная функция для отправки формы
async function submitForm(prevState, formData) {
  const username = formData.get('username');
  const password = formData.get('password');

  // Имитация API запроса
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (username === 'admin' && password === 'password') {
    return { success: true, message: 'Успешный вход!' };
  } else {
    return { success: false, message: 'Неверные учетные данные' };
  }
}

export default function App() {
  const [state, dispatch, isPending] = useActionState(submitForm, null);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>useActionState Hook (React 19)</h1>

      <form action={dispatch}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Username:
            <input
              type='text'
              name='username'
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              placeholder='admin'
            />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Password:
            <input
              type='password'
              name='password'
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              placeholder='password'
            />
          </label>
        </div>

        <button
          type='submit'
          disabled={isPending}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: isPending ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isPending ? 'not-allowed' : 'pointer',
          }}
        >
          {isPending ? 'Вход...' : 'Войти'}
        </button>
      </form>

      {state && (
        <div
          style={{
            marginTop: '15px',
            padding: '10px',
            backgroundColor: state.success ? '#d4edda' : '#f8d7da',
            color: state.success ? '#155724' : '#721c24',
            borderRadius: '4px',
            border: `1px solid ${state.success ? '#c3e6cb' : '#f5c6cb'}`,
          }}
        >
          {state.message}
        </div>
      )}

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>
          <strong>Тестовые данные:</strong>
        </p>
        <p>Username: admin</p>
        <p>Password: password</p>
      </div>
    </div>
  );
}
