import { useForm } from 'react-hook-form';
import Headers from './Header';
import './style.css';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Headers />

        <input {...register('first name', { required: true })} />

        <input {...register('last name', { required: true })} />

        <input type='submit' />
      </form>
    </div>
  );
}
