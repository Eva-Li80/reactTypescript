import React, { useRef } from 'react';

const MouseEvent = () => {
  const handleClickRef = useRef<(event: React.MouseEvent<HTMLButtonElement>) => void>(
    ()  => alert('Button clicked!')
  );

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleClickRef.current(event);
  };

  return (
    <div className='mouseevent'>
      <h1>Mouseevent</h1>
      <button onMouseEnter={handleMouseEnter}>Hover me</button>
    </div>
  );
};

export default MouseEvent;
