import { Fragment } from 'react'

export default function Bomb(props) {
  if (props.number >= 10) {
    throw new Error("invalid 'number' value")
  }
  return (
    <>
      {props.data.map((elem, index) => {
        return (<Fragment key={index}>{elem}</Fragment>)
      })
      }
    </>
  )
}
