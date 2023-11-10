import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './store';

let id = 1;
function getId() {
    return id++;
}

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const onChange = (event) => {
        setInputValue(event.target.value);
    }

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    }

    return (
        <div style={{ margin: 10, display: 'flex', flexDirection: 'row', width: 230, justifyContent: 'space-between' }}>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add Item</button>
        </div>
    )
}

export default TodoItemCreator;