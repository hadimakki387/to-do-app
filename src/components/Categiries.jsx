import React from "react";
import Button from "./button";

function Categiries(props) {
  console.log(props.filter === 'All');
  const active = 'border border-black ';
  return (
    <div className="flex justify-between mt-4">
      <div className="space-x-2">
        <button className={'rounded-md p-1 ' + (props.filter === 'All' ? active : '')} onClick={() => props.setCategory('All')}>
          All
        </button>
        <button className={'rounded-md p-1 ' + (props.filter === 'Active' ? active : '')} onClick={() => props.setCategory('Active')}>
          Active
        </button>
        <button className={'rounded-md p-1 ' + (props.filter === 'Completed' ? active : '')} onClick={() => props.setCategory('Completed')}>
          Completed
        </button>
      </div>

      <div>
        <Button
          name="Clear completed"
          styles="border border-gray-400 p-1"
          click={props.clearCompleted}
        />
      </div>
    </div>
  );
}

export default Categiries;

