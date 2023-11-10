import './App.css';
import { useState, useEffect, useCallback, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Input from './Input';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0); 
  const [value, setValue] = useState(0); 
  const location = useLocation;
  const state = location.state;
  console.log('## state', state);
  // const sum = () => {
  //   console.log('### call sum', count, value);
  //   return Number(count) + Number(value)
  // }

  const sum = useMemo(() => {
    console.log('### call sum', count, value);
    return Number(count) + Number(value)
  }, [count, value]);

  // useEffect(() => {
  //   console.log('### count redner', count);
  //   console.log('### value redner', value);

  // },);

  useEffect(() => {
    console.log('### App.js render 완료');
  }, []);

  useEffect(() => {
    console.log('### count 감지 ', count);
  }, [count]);

  useEffect(() => {
    console.log('### value 감지 ', value);
  }, [value]);


  const clickPlusButton = useCallback(() => {
    setCount(Number(count) + Number(value));
  }, [count, value])

  // const clickPlusButton = () => {
  //   setCount(Number(count) + Number(value));
  // };

  const clickMinusButton = () => {
    setCount(Number(count) - Number(value));
  };

  return (
    <div className="App">
      test: {state}
      count: {count}
      <div>
        sum: {sum}
      </div>
      <Input 
        currentValue={value}
        setCurrentValue={setValue}
      />
      <div>
        <Button 
          name="plus button"
          onAction={clickPlusButton}
        />
        <Button 
          name="minus button"
          onAction={clickMinusButton}
        />
      </div>
    </div>
  );
}

export default App;
