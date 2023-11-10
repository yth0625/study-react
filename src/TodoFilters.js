import { useRecoilState } from 'recoil';
import { todoListFilterState } from './store';
import './TodoFilters.css';

const TodoFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({target}) => {
        setFilter(target.value)
    }
    return (
        <div className='TodoFilters'>
            Filters:
            <select className='TodoFiltersSelect' value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}

export default TodoFilters;