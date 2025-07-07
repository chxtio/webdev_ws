import './App.css'
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    console.log(`Button clicked ${count + 1} times`);
  }

  return (
    <>
      <h1>🎉React🎉</h1>
      <button onClick={handleClick}>Count is {count}</button>
    </>
  )
}

export default App
