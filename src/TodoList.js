import { todoListState, filteredTodoListState } from './store';
import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoFilters from './TodoFilters';

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);
    const todoFilterdList = useRecoilValue(filteredTodoListState);

    return (
        <>

            <TodoFilters />
            <TodoItemCreator />
            
            {
                todoFilterdList .map((todoItem) => (
                    <TodoItem item={todoItem} />
                ))
            }
        </>
    )
}

export default TodoList;