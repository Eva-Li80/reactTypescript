import React, { useReducer, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleAddCounter = () => {
    setCount((prevcount) => prevcount + 1);
  };

  const handleRemoveCounter = () => {
    setCount((prevcount) => prevcount - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      alert("måste vara en siffra ")
    }
    setCount(Number(e.target.value));
  };

  return (
    <div className="counter">
        <h2>Counter</h2>
      <input type="text" value={count} onChange={handleChange} />
      <button onClick={handleRemoveCounter}>Remove</button>
      <button onClick={handleAddCounter}>Add</button>
    </div>
  );
};

export default Counter;
