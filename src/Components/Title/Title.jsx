import s from "./Title.module.css"

export default function Title(porps) {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{porps.title ?? "title"}<span>{porps.lesson ?? 1}</span></h1>
    </div>
  )
}
