import { useState } from 'react'
import Input from './Input';

export default function Test() {
  const [state, setState] = useState([
    {
      name: "name",
      value: "",
      label: "Enter your Name",
      type: "text",
      errorMessage: "Invalid Name",
      isValid: true,
    },
    {
      name: "surname",
      value: "",
      label: "Enter your surname",
      type: "text",
      errorMessage: "Invalid surname",
      isValid: true,
    },
    {
      name: "email",
      value: "",
      label: "Enter your email",
      type: "email",
      errorMessage: "Invalid email",
      isValid: true,
    }
  ])


  const handlerChange = (e) => {


  }
  return (
    <div>
      <form >
        {state.map(((elem, index) => {
          return (
            <Input
              key={index}
              label={elem.label}
              type={elem.type}
              name={elem.name}
              value={elem.value}
              onChange={handlerChange}
              isValid={elem.isValid}
            />
          )
        }))}

      </form>
    </div>
  )
}
