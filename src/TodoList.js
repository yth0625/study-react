import { filteredTodoListState } from './store';
import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoFilters from './TodoFilters';
import TodoListStatus from './TodoListStatus';

const TodoList = () => {
    // const todoList = useRecoilValue(todoListState);
    const todoFilterdList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStatus />
            <TodoFilters />
            <TodoItemCreator />
            
            {
                todoFilterdList.map((todoItem) => (
                    <TodoItem item={todoItem} />
                ))
            }
        </>
    )
}

export default TodoList;