import { useRef, useState } from "react";

function ChangeText() {
  const [changedText, setChangedText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setChangedText(inputRef.current.value);
      inputRef.current.value = ""
    }
  };
  return (
    <div className="changetext">
        <h1>Change text</h1>
      Texten: <p>{changedText}</p>
      <div>
        <input type="text" ref={inputRef} placeholder="skriv en text"/>
      </div>
      <div>
        <button onClick={handleClick}>Ändra text</button>
      </div>
    </div>
  );
}

export default ChangeText;
