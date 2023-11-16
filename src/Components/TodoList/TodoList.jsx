import TodoItem from './TodoItem';

export default function TodoList({ todos, changeStatus, onDelete }) {

  return (
    <div>
      {todos.map((elem) => {
        return (
          <TodoItem
            key={elem.id}
            todo={elem}
            changeStatus={changeStatus}
            onDelete={onDelete} />
        )
      })
      }
    </div>
  )
}
