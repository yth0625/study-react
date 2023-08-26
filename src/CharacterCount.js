import {
    charCountState
} from './store';

import { useRecoilValue } from 'recoil'

const CharacterCount = () => {
    const textCount = useRecoilValue(charCountState);
    return (
        <div>
            Character Count: {textCount}
        </div>
    )
}

export default CharacterCount;