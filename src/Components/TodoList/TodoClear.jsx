export default function TodoClear(props) {
  const len = props.todo.filter(elem => elem.isComplited).length
  return (
    <div>
      <p>{len}/{props.todo.length} complited</p>
      <button onClick={props.deleter}>Clear complited todos </button>
    </div>
  )
}
