import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './store';

let id = 0;
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
                isComplete: true,
            },
        ]);
        setInputValue('');
    }


    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add Item</button>
        </div>
    )
}

export default TodoItemCreator;