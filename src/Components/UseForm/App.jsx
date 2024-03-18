import { useForm } from "react-hook-form";
import Headers from "./Header";
import "./style.css"

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  console.log(useForm())
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Headers />
        <input {...register('first name', { required: true, maxLength: 20 })} />
        <input {...register('last name', { required: true, minLength: 5 })} />
        <input type="submit" />
      </form>
    </div>

  );
}
