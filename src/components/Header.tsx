import { TodoTitle } from "../types"
import CreateTodo from "./CreateTodo"

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export default function Header({ onAddTodo }: Props){
  return (
    <header className="header">
      <h1>todo 
        <img 
          width={60}
          height='auto'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png"
        />
      </h1>

      <CreateTodo onAddTodo={onAddTodo}/>
    </header>
  )
}