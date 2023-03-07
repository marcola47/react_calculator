import React, { useState } from 'react';
import './app.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

function App() 
{
  const [prevOperand, setPrevOperand] = useState('');
  const [currOperand, setCurrOperand] = useState('');
  const [operation, setOperation] = useState('');
  
  function addToOperand(digit)
  {
    let current = currOperand;
    let hasDecimal = currOperand.includes('.');
    
    if (hasDecimal === false && digit === '.')
      current += digit;

    else if (digit !== '.')
      current += digit;

    setCurrOperand(current);
  }

  function addToOperation(newOperation)
  {
    if (prevOperand === '' && currOperand === '')
      return;
    
    setOperation(newOperation);

    if (prevOperand === '')
    {
      setPrevOperand(currOperand);
      setCurrOperand('');
    }
  }

  function clearLastDigit()
  {
    setCurrOperand(currOperand.slice(0, -1));
  }

  function clearCurrentOperand()
  {
    setCurrOperand('');
  }

  function clearAll()
  {
    setCurrOperand('');
    setPrevOperand('');
    setOperation('');
  }

  function calculate()
  {
    let prevToFloat = parseFloat(prevOperand);
    let currToFloat = parseFloat(currOperand);

    if (prevToFloat !== '' && currToFloat !== '' && operation !== '')
    {
      if      (operation === '×') currToFloat = prevToFloat * currToFloat;
      else if (operation === '÷') currToFloat = prevToFloat / currToFloat;
      else if (operation === '+') currToFloat = prevToFloat + currToFloat;
      else if (operation === '-') currToFloat = prevToFloat - currToFloat;

      setPrevOperand('');
      setOperation('');

      let currToString = currToFloat.toString();
      setCurrOperand(currToString);
    }
  }

  return (
    <div className="app">
      <div className='app-title'><h1>CALCULATOR</h1><FontAwesomeIcon icon={faCalculator}></FontAwesomeIcon></div>

      <div className='calculator'>
        <div className='calculator-display'>
          <p className='prev-operand'>{prevOperand}</p>
          <p className='operation'>{operation}</p>
          <p className='curr-operand'>{currOperand}</p>
        </div>
        
        <div className='calculator-grid'>
          <button onClick={clearAll} className='calculator-btn btn-erase' id='ac'>AC</button>
          <button onClick={clearLastDigit} className='calculator-btn btn-erase' id='c'>C</button>
          <button onClick={clearCurrentOperand} className='calculator-btn btn-erase' id='del'>DEL</button>
          <button onClick={() => {addToOperation('×')}} className='calculator-btn btn-operation' id='multiply'>×</button>
          <button onClick={() => {addToOperation('÷')}} className='calculator-btn btn-operation' id='divide'>÷</button>
          <button onClick={() => {addToOperation('+')}} className='calculator-btn btn-operation' id='add'>+</button>
          <button onClick={() => {addToOperation('-')}} className='calculator-btn btn-operation' id='sub'>-</button>
          <button onClick={() => {addToOperand('.')}} className='calculator-btn btn-operation' id='comma'>.</button>
          <button onClick={calculate} className='calculator-btn btn-operation' id='res'>=</button>
          
          <button onClick={() => addToOperand('7')} className='calculator-btn btn-number' id='b7'>7</button>
          <button onClick={() => addToOperand('8')} className='calculator-btn btn-number' id='b8'>8</button>
          <button onClick={() => addToOperand('9')} className='calculator-btn btn-number' id='b9'>9</button>

          <button onClick={() => addToOperand('4')} className='calculator-btn btn-number' id='b4'>4</button>
          <button onClick={() => addToOperand('5')} className='calculator-btn btn-number' id='b5'>5</button>
          <button onClick={() => addToOperand('6')} className='calculator-btn btn-number' id='b6'>6</button>

          <button onClick={() => addToOperand('1')} className='calculator-btn btn-number' id='b1'>1</button>
          <button onClick={() => addToOperand('2')} className='calculator-btn btn-number' id='b2'>2</button>
          <button onClick={() => addToOperand('3')} className='calculator-btn btn-number' id='b3'>3</button>

          <button onClick={() => addToOperand('0')} className='calculator-btn btn-number' id='b0'>0</button>
        </div>
      </div>
    </div>
  );
}

export default App;
