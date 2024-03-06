import React, { HtmlHTMLAttributes, useState } from "react";

const PrettyText = () => {
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleBoldChange = () => {
    setIsBold(!isBold);
  };

  const handleItalicChange = () => {
    setIsItalic(!isItalic);
  };

  const handleLargeChange = () => {
    setIsLarge(!isLarge);
  };

  return (
    <div className="pretty">
      <h2>Pretty Text</h2>
      <h1 className="text"
        style={{
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
          fontSize: isLarge ? "100px" : "50px",
        }}
      >
        {text}
      </h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Skriv din text här..."
      />
      
      <div>
        <label>Fet stil: </label>
        <input type="checkbox" checked={isBold} onChange={handleBoldChange} />
      </div>
      <div>
        <label>Kursiv: </label>
        <input
          type="checkbox"
          checked={isItalic}
          onChange={handleItalicChange}
        />
      </div>
      <div>
        <label>Större textstorlek: </label>
        <input type="checkbox" checked={isLarge} onChange={handleLargeChange} />
      </div>
      <button>Visa text</button>
   
    </div>
  );
};

export default PrettyText;
