import { useState } from 'react'

export const CustomHook = ({
  min = -10,
  max = 15,
  step = 1,
  initial = 0
}) => {

  const [count, setcount] = useState(initial)
  const inc = () => {
    setcount(prevCount => prevCount + step > max ? max : prevCount + step)
  }
  const dec = () => {
    setcount(prevCount => prevCount - step < min ? min : prevCount - step)
  }
  const reset = () => {
    setcount(initial)
  }
  return [count, { inc, dec, reset }]
}