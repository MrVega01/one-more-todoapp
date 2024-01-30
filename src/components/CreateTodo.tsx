import { useState } from "react"
import { TodoTitle } from "../types"

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export default function CreateTodo({ onAddTodo }: Props){
  const [todo, setTodo] = useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddTodo({ title: todo })
    setTodo('')
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="¿Qué quieres hacer?"
        value={todo}
        onChange={onChangeInput}
        autoFocus
      />
    </form>
  )
}