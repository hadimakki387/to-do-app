import React from "react";
import Button from "./button";

function Categiries(props) {
  return (
    <div className="flex justify-between mt-4">
      <div className="space-x-2">
        <button className={"rounded-md "+ props.filter==='All'?' border border-gray-400 p-1':''} onClick={()=>props.setCategory('All')}>
          All
        </button>
        <button className={"rounded-md "+ props.filter==='Active'?' border border-gray-400 p-1':''} onClick={()=>props.setCategory('Active')}>
          Active
        </button>
        <button className={"rounded-md "+ props.filter==='Completed'?' border border-gray-400 p-1':''} onClick={()=>props.setCategory('Completed')}>
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
