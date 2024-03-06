import { useRef } from "react";


const TextToAlert = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      inputRef.current.focus();
      alert(inputValue);
    }
  };

  return (
    <div className="texttoalert">
        <h1>TextToAlert</h1>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleButtonClick}>Text to Alert</button>
    </div>
  );
};

export default TextToAlert;

























