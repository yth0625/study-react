import {
    textState
} from './store';

import './Todo.css';

import TextInput from './TextInput';
import CharacterCount from './CharacterCount';
import TodoList from './TodoList';
const Todo = () => {
    return (
        <div className='Todo'>
            {/* <TextInput />
            <CharacterCount /> */}
            <TodoList />
        </div>
    )
}

export default Todo;