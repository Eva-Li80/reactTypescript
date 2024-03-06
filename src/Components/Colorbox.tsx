import React, { useState } from 'react';

const ColorBox: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColor(value);
    setErrorMessage('');
  };

  const applyColor = () => {
    if (!isValidHex(color)) {
      setErrorMessage('Please enter a valid hexadecimal color value');
      return;
    }

    setErrorMessage('');
    updateColor();
  };

  const updateColor = () => {
    const box = document.getElementById('color-box');
    if (box) {
      box.style.backgroundColor = color;
    }
  };

  const isValidHex = (hex: string) => /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hex);

  return (
    <div className='colorbox'>
      <input type="text" value={color} onChange={handleChange} placeholder="Enter color" />
      <button onClick={applyColor}>Apply Color</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div id="color-box" style={{ width: '100px', height: '100px', backgroundColor: '', marginTop: '10px' }}></div>
    </div>
  );
};

export default ColorBox;
