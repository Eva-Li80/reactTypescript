import React, { useState, useRef } from 'react';

const Addition = () => {
  const [numett, setNumEtt] = useState<number>(0);
  const [numtvå, setNumTvå] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  const firstInputRef = useRef<HTMLInputElement>(null);

  const handleNumEttChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setNumEtt(isNaN(value) ? 0 : value);
  };

  const handleNumTvåChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setNumTvå(isNaN(value) ? 0 : value);
  };

  const add = () => {
    const summa = numett + numtvå;
    setSum(summa);
    setNumEtt(0);
    setNumTvå(0);
    firstInputRef.current?.focus();
  };

  return (
    <div className='addition'>
      <p>{sum}</p>
      <input
        ref={firstInputRef}
        type="text"
        value={numett}
        onChange={handleNumEttChange}
      />
      <input type="text" value={numtvå} onChange={handleNumTvåChange} />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default Addition;
