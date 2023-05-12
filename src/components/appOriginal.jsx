import "../reset.css";
import "../App.css";
import Button from "./button";
import ListItem from "./listItem";
import Form from "./form";
import BR from "./BR";
import { useState } from "react";

function AppOriginal() {
  const [toDos, setTodos] = useState([
    {
      id: 1,
      title: "finish React Series",
      isComplete: false,
      editingState: false,
    },
    {
      id: 2,
      title: "Go Grocery",
      isComplete: true,
      editingState: false,
    },
    {
      id: 3,
      title: "Take over world",
      isComplete: true,
      editingState: false,
    },
  ]);
  const [input, setInput] = useState("");

  let inputCapture = (e) => {
    setInput(e.target.value);
  };

  let addToDo = (e) => {
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

  let removeItem = (id) => {
    setTodos([...toDos].filter((toDo) => toDo.id !== id));
  };

  let check = (id) => {
    const newToDo = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.isComplete = !toDo.isComplete;
      }
      return toDo;
    });
    setTodos(newToDo);
  };

  const isEditing = (id) => {
    const newToDo = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.editingState = !toDo.editingState;
      }
      return toDo;
    });
    setTodos(newToDo);
  };

  const updateToDo = (e, id) => {
    const newToDo = toDos.map((toDo) => {
      if (toDo.id === id) {
        if (e.target.value) {
          toDo.title = e.target.value;
          toDo.editingState = !toDo.editingState;
        } else {
          toDo.editingState = !toDo.editingState;
        }
      }
      return toDo;
    });
    setTodos(newToDo);
  };
  const cancelEdit = (e, id) => {
    const newToDo = toDos.map((toDo) => {
      if (toDo.id === id) {
        if (e.target.value) {
          toDo.editingState = !toDo.editingState;
        } 
      }
      return toDo;
    });
    setTodos(newToDo);
  };
  return (
    
      <div className="grid justify-start gap-4 grid-cols-1  w-1/3 max-[1080px]:w-1/2 max-[690px]:w-full relative top-32 m-auto bg-white p-8">
        <div className="w-full">
          <h2 className="font-bold text-2xl text-left">Todo App</h2>
        </div>

        <Form onChange={inputCapture} onSubmit={addToDo} inputValue={input} />

        {toDos.map((toDo, index) => (
          <ListItem
            content={toDo.title}
            styles={toDo.isComplete === true ? "line-through" : ""}
            key={toDo.id}
            id={toDo.id}
            removeItem={removeItem}
            check={check}
            isComplete={toDo.isComplete}
            editingState={toDo.editingState}
            isEditing={isEditing}
            updateToDo={updateToDo}
            cancelEdit = {cancelEdit}
          />
        ))}

        <BR />

        <div className="flex justify-between w-full mt-4 ">
          <Button name="Check All" styles="border border-gray-400 p-1" />
          <span>3 items remaining</span>
        </div>

        <BR />

        <div className="flex justify-between mt-4">
          <div className="space-x-2">
            <Button name="All" styles="border border-gray-400 p-1" />
            <Button name="Active" styles="" />
            <Button name="Completed" styles="" />
          </div>

          <div>
            <Button
              name="Clear completed"
              styles="border border-gray-400 p-1"
            />
          </div>
        </div>
      </div>

  );
}

export default AppOriginal;
