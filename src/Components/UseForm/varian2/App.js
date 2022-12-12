import * as React from "react";
import { useForm } from "react-hook-form";

import "../style.css"

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data)
  console.log(errors)
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          type="text"
          palaceholder="email" {...register("email", {
            required: "Email asa ara",
          })} />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          name="password"
          type="password"
          palaceholder="password"
          {...register("password", {
            minLength: { value: 3, message: "More tahn 3 symbols" },
            required: true,
          })} />
        {errors.password && <span>This field is required {errors.password.message}</span>}
        <input type="submit" />
      </form>
      <pre>
        {JSON.stringify(register, null, 2)}
        dsa
      </pre>
    </div>

  );
}
