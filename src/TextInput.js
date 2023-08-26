import {
    useRecoilState
} from 'recoil';

import {
    textState
} from './store';

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);

    const textChage = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={textChage} />
            <br />
            Echo: {text}
        </div>
    )
}

export default TextInput;