const Input = ({ currentValue, setCurrentValue }) => {
    const onValue = (event) => {
        setCurrentValue(event.target.value);
    };
    return (
        <input
            value={currentValue}
            onChange={onValue}
            type="number"
        >
        </input>
    )
}

export default Input;