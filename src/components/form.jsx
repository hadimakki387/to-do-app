import React, { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";

function Form(props) {
  const [toDos,setTodos] =useContext(TodosContext)

  
  
  

  const [input, setInput] = useState('');

  let inputCapture = (e) => {
    setInput(e.target.value);
  };

  let onSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    setTodos([
      ...toDos,
      {
        id: toDos.length + 1,
        title: input,
        isComplete: false,
      },
    ]);
    setInput("");
  };
  
  return (
    <div className="w-full ">
      <form action="#" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="what do you need to do?"
          className="h-12 w-full border border-gray-300 p-4 rounded-md"
          onChange={inputCapture}
          value={input}
        ></input>
      </form>
    </div>
  );
}

export default Form;
