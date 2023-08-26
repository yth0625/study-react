const Button = ({ name, onAction }) => {
    return (
        <button onClick={onAction}>
            {name}
        </button>
    )
}

export default Button;