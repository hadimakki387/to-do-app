import React from "react";
import Button from "./button";

function CheckAll(props) {
    let toDos = props.toDos;
  

  let remainingTodos = () =>{
    return toDos.filter(toDo =>!toDo.isComplete).length
  }
  

  return (
    <div className="flex justify-between w-full mt-4 ">
      <Button
        name="Check All"
        styles="border border-gray-400 p-1"
        click={props.checkAll}
      />
      <span>{remainingTodos()} items remaining</span>
    </div>
  );
}

export default CheckAll;
