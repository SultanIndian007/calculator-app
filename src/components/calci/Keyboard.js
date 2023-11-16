"use client"
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 rounded-md shadow-md">
      <input
        type="text"
        value={input}
        readOnly
        className="w-full p-2 mb-2 border rounded"
      />
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => handleButtonClick('1')}
          className="btn"
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick('2')}
          className="btn"
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick('3')}
          className="btn"
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick('+')}
          className="btn"
        >
          +
        </button>
        <button
          onClick={() => handleButtonClick('4')}
          className="btn"
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick('5')}
          className="btn"
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick('6')}
          className="btn"
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick('-')}
          className="btn"
        >
          -
        </button>
        <button
          onClick={() => handleButtonClick('7')}
          className="btn"
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick('8')}
          className="btn"
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick('9')}
          className="btn"
        >
          9
        </button>
        <button
          onClick={() => handleButtonClick('*')}
          className="btn"
        >
          *
        </button>
        <button
          onClick={() => handleButtonClick('0')}
          className="btn"
        >
          0
        </button>
        <button onClick={handleClear} className="btn">
          C
        </button>
        <button onClick={handleCalculate} className="btn">
          =
        </button>
        <button
          onClick={() => handleButtonClick('/')}
          className="btn"
        >
          /
        </button>
      </div>
      <div className="mt-4">Result: {result}</div>
    </div>
  );
};

export default Calculator;
