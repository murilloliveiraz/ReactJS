import P from 'prop-types';
import React, { useCallback, useState } from 'react';
import './App.css';


const Button = React.memo( function Button({incrementButton}){
  console.log("Filho, renderizou");
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
}

function App() {
  const [counter, setCounter ] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log("Pai, renderizou")

  return (
    <div className='App'>
      <h1>counter : {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  )
}

export default App
