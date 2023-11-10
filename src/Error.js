import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
    const ClickHome = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Not Found Page!</h1>
            <button onClick={ClickHome}>
                Go Home
            </button>
        </div>
    )
}

export default Error;