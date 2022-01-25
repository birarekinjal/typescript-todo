import React, { useState } from 'react';

function Test() {
  const [counter, setCount] = useState(0);

  const handleClick = () => {
    setCount(counter + 1);
  };

  if (counter === 5) {
    throw new Error('I crashed!');
  }
  return <h1 onClick={handleClick}>{counter}</h1>;
}

export default Test;
