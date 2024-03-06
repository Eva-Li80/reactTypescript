import { useRef, useState } from "react";


const TextToDisplay = () => {
  const [displayedText, setDisplayedText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setDisplayedText(inputRef.current?.value || "");
      inputRef.current.value = "";
    }
  };

  return (
    <div className="texttodisplay">
        <h1>TextToDisplay</h1>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleButtonClick}>Text to Display</button>
      <p>{displayedText}</p>
    </div>
  );
};

export default TextToDisplay;


























