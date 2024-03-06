import React, { useRef, useState } from 'react';

const Text = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("")

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setText(inputRef.current?.value || "");
  };

  return (
    <div className='text'>
        <h1>Text</h1>
      <input ref={inputRef} type="text" />
      {text}
      <button onClick={handleButtonClick}>Focus input</button>
    </div>
  );
};

export default Text;


