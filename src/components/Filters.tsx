import { FilterValue } from "../types"
import { FILTERS_BUTTONS } from "../utils/const"

interface Props {
  filterSelected: FilterValue,
  onFilterChange: (filter: FilterValue) => void
}

export function Filters({ filterSelected, onFilterChange }: Props){
  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([ key, { literal, href } ]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''
          return (
            <li>
              <a
                className={className}
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}