import { useRecoilValue } from 'recoil';
import { todoListStatusState } from './store';

const TodoListStatus = () => {
    const { 
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted 
    } = useRecoilValue(todoListStatusState);

    return (
        <ul>
            <li>Total items: {totalNum}</li>
            <li>Items completed: {totalCompletedNum}</li>
            <li>Items not completed: {totalUncompletedNum}</li>
            <li>Percent completed: {percentCompleted}</li>
        </ul>
    )
}

export default TodoListStatus;