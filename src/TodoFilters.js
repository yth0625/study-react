import { useRecoilState } from 'recoil';
import { todoListFilterState } from './store';

const TodoFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({target}) => {
        setFilter(target.value)
    }
    return (
        <>
            Filters:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    )
}

export default TodoFilters;