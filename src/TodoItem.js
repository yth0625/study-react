import { useRecoilState } from 'recoil';
import { todoListState } from './store';

const TodoItem = ({item}) => {
    // const [todoList, setTodoList] = useRecoilState(todoListState);
    // const index = todoList.findIndex((listItem) => listItem === item);


    return (
        <div>
            <input type="text" value={item.text}/>
            <input
                type="checkbox"
                checked={item.isComplete}
            />
        </div>
    )
}

export default TodoItem;