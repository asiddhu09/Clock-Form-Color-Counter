import React, { useState } from 'react';
// import { Button, ButtonGroup } from '@mui/material/Button';
// import {Button, ButtonGroup} from '@mui/material/Button';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Add, Remove } from '@mui/icons-material';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <ButtonGroup color="primary">
        <Button onClick={decrementCount} startIcon={<Remove />}>Decrease</Button>
        <Button onClick={incrementCount} endIcon={<Add />}>Increase</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
