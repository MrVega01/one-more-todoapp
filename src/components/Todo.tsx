import { Todo, TodoId, type Todo as TypeTodo } from "../types"

interface Props extends TypeTodo {
  onRemoveTodo: ({ id }: TodoId) => void
  onCompletedTodo: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompletedTodo }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={(event) => {
          onCompletedTodo({ id, completed: event.target.checked})
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => onRemoveTodo({ id })}
      />
    </div>
  )
}
export default Todo