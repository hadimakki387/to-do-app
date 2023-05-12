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
    },
    {
      id: 2,
      title: "Go Grocery",
      isComplete: true,
    },
    {
      id: 3,
      title: "Take over world",
      isComplete: true,
    },
  ]);

  return (
    <div className="bg-gray-100 h-[100vw]">
      <div className="grid justify-start gap-4 w-1/3 relative top-32 m-auto bg-white p-8 ">
        <div className="w-full">
          <h2 className="font-bold text-2xl text-left">Todo App</h2>
        </div>

        <Form />

        {toDos.map((toDo, index) => (
          <ListItem
            content={toDo.title}
            styles={toDo.isComplete ? "line-through" : ""}
            key={toDo.id}
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
    </div>
  );
}

export default AppOriginal;
