import { type TodoId, type ListOfTodo, type Todo as TodoType } from "../types"
import Todo from "./Todo"

interface Props {
  todos: ListOfTodo
  onRemoveTodo: ({ id }: TodoId) => void,
  onCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompletedTodo }) => {
  return (
    <ul className="todo-list">
      {
        todos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
          >
            <Todo
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
              onCompletedTodo={onCompletedTodo}
            />
          </li>
        ))
      }
    </ul>
  )
}

export default Todos