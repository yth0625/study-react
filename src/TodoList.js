import { todoListState } from './store';
import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            <TodoItemCreator />
            {
                todoList.map((todoItem) => (
                    <TodoItem item={todoItem} />
                ))
            }
        </>
    )
}

export default TodoList;