import React, { useMemo } from "react";
import Button from "./button";

function CheckAll(props) {
  let toDos = props.toDos;
  
  let remainingTodos = () => {
    console.log('calculating')
    return toDos.filter((toDo) => !toDo.isComplete).length;
  };
  const remaining = useMemo(remainingTodos,[toDos])


  return (
    <div className="flex justify-between w-full mt-4 ">
      <Button
        name="Check All"
        styles="border border-gray-400 p-1"
        click={props.checkAll}
      />
      <span>{remaining} items remaining</span>
    </div>
  );
}

export default CheckAll;
