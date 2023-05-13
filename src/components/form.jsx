import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState('');

  let inputCapture = (e) => {
    setInput(e.target.value);
  };

  let onSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    props.addToDo(input)
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
