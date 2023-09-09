import { useRecoilState } from 'recoil';
import { todoListState } from './store';

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtindex(arr, index, newValue) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const TodoItem = ({item}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemTextV2 = ({target}) => {
        console.log('### call editItemTextV2');
        const newTodoList = todoList.map(todo => {
            if (todo.id === item.id) {
                return {
                    id: item.id,
                    text: target.value,
                    isComplete: item.isComplete
                }
            } 
            return item;
        })
        console.log('### newTodoList', newTodoList);
        setTodoList(newTodoList);
    };

    const toggleItemCompletionV2 = () => {
        console.log('### call editItemTextV2');
        const newTodoList = todoList.map(todo => {
            if (todo.id === item.id) {
                return {
                    id: item.id,
                    text: item.text,
                    isComplete: !item.isComplete
                }
            } 
            return item;
        })
        console.log('### newTodoList', newTodoList);
        setTodoList(newTodoList);
    };

    const editField = (type, {target}) => {
        console.log('### call editItemTextV2', target);
        const newTodoList = todoList.map(todo => {
            console.log('### check id', todo.id, item.id);
            if (todo.id === item.id) {
                return {
                    id: item.id,
                    text: type === 'text' ? target.value: item.text,
                    isComplete: type === 'check' ? target.checked : item.isComplete,
                }
            } 
            return todo;
        })
        console.log('### newTodoList', newTodoList);
        setTodoList(newTodoList);
    };

    const editItemText = (target => {
        console.log('### call editItemText');

        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: target.value
        })
        setTodoList(newList);
    });
    
    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        })
        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtindex(todoList, index);

        setTodoList(newList);
    }

    return (
        <div>
            {item.id}.
            <input type="text" value={item.text} onChange={(event) => editField('text', event)}/>
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={(event) => editField('check', event)}
            />
            <button onClick={deleteItem}>delete Item</button>
        </div>
    )
}

export default TodoItem;