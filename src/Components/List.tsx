import React, { useRef, useState } from 'react';

const List: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoArr, setTodoArr] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (inputRef.current && todo.trim() !== "") {
      inputRef.current.focus();
      setTodoArr([...todoArr, todo]);
      setTodo("");
    }
  
  };

  const removeTodo = (index: number) => {
    const updatedTodos = todoArr.filter((_, i) => i !== index);
    setTodoArr(updatedTodos);
  };

  return (
    <div className='list'>
      <h1>Lägg till något </h1>
      <input ref={inputRef} type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='skriv något' />
      <button onClick={addTodo}>lägg till</button>
      <ul>
        {todoArr.map((todoItem, index) => (
          <li key={index}>
            {todoItem} 
            <button onClick={() => removeTodo(index)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
