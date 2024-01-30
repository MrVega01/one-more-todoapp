import type { FilterValue, ListOfTodo, Todo } from "../types"
import { Filters } from "./Filters"

interface Props {
  activeCount: number,
  completedCount: number,
  onClearCompleted: () => void
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

const Footer: React.FC<Props> = ({ 
  activeCount = 0, 
  completedCount = 0, 
  filterSelected,
  onClearCompleted,
  handleFilterChange
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> Tareas pendientes
      </span>

      <Filters
       filterSelected={filterSelected}
       onFilterChange={handleFilterChange}
      />

      {
        completedCount > 0 && (
          <button
            className="clear-completed"
            onClick={onClearCompleted}
          >
            Borrar completadas
          </button>
        )
      }
    </footer>
  )
}
export default Footer