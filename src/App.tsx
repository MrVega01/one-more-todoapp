import { useState } from "react"
import Todos from "./components/Todos"
import { FilterValue, TodoTitle, type Todo, type TodoId } from "./types"
import { TODO_FILTERS } from "./utils/const"
import Footer from "./components/Footer"
import Header from "./components/Header"

const mockTodo = [
  {
    id: '1',
    title: 'todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodo)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos(todos => [...todos, newTodo])
  }
  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const handleClearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }
  const handleCompleted = ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) return {
        ...todo,
        completed
      }
      else return todo
    })

    setTodos(newTodos)
  }
  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filteredTodos = todos.filter(todo => {
    switch (filterSelected) {
      case TODO_FILTERS.ALL: return true
      case TODO_FILTERS.ACTIVE: {
        return !todo.completed
      }
      case TODO_FILTERS.COMPLETED: {
        return todo.completed
      }
    }
      
  })

  return (
    <main className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onCompletedTodo={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
      />
    </main>
  )
}

export default App
