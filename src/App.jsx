import './App.css'
import { useState } from 'react';
import { Button, Typography, Container, Box } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    console.log(`Button clicked ${count + 1} times`);
  }

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: 'center',
              color: '#2c3e50',
              // fontSize: '3rem',
              marginBottom: '20px',
              animation: `pop-in 0.6s ease-out`,
              '@keyframes pop-in': {
                '0%': { transform: 'scale(0.5)', opacity: 0 },
                '100%': { transform: 'scale(1)', opacity: 1 },
              },
            }}
          >
            🎉React + Material UI🎉
          </Typography >
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClick}
            sx={{
              mt: 3,
              '&:hover': {
                backgroundColor: `#1a252f`
              }
            }}
          >
            Count is {count}
          </Button >
        </Container>
      </Box >
    </>
  )
}

export default App