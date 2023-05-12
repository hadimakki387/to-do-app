import "../reset.css";
import "../App.css";
import Button from "./button";
import ListItem from "./listItem";

function AppOriginal() {
  return (
    <div className="bg-gray-100 h-[100vw]">
      <div className="grid justify-start gap-4 w-1/3 relative top-32 m-auto bg-white p-8 ">
        <div className="w-full">
          <h2 className="font-bold text-2xl text-left">Todo App</h2>
        </div>

        <div className="w-full ">
          <form className="">
            <input
              type="text"
              placeholder="what do you need to do?"
              className="h-12 w-full border border-gray-300 p-4 rounded-md"
            ></input>
          </form>
        </div>

        <ListItem content="Finish react series" />
        <ListItem content="Go to groceries" styles="line-through" />
        <ListItem content="Do other things" />

        <div className="h-[2px] w-[35rem] bg-neutral-300 mt-4"></div>

        <div className="flex justify-between w-full mt-4 ">
          <button className="border border-gray-400 p-1 rounded-md">
            check All
          </button>

          <span>3 items remaining</span>
        </div>
        <div className="h-[2px] w-[35rem] bg-neutral-300 mt-4"></div>

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
