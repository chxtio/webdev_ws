import './App.css'
import { useState } from 'react';
// import Button from '@mui/material/Button'; // Import MUI Button
import { Button } from '@mui/material'; // Import MUI Button



function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    console.log(`Button clicked ${count + 1} times`);
  }

  return (
    <>
      <h1>🎉React🎉</h1>
      {/* <Button variant={contained} onClick={handleClick}>Count is {count}</Button> */}
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Count is {count}
      </Button>
    </>
  )
}

export default App
