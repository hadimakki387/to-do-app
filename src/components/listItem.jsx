import "../App.css";

function ListItem(props) {
  return (
    <div className="flex justify-between w-full mt-4">
      <div className="flex gap-4">
        <input
          type="checkbox"
          onChange={() => props.check(props.id)}
          checked={props.isComplete ? true : false}
        ></input>
        <span onDoubleClick={() => props.isEditing(props.id)}>
          {props.editingState ? (
            <input
              defaultValue={props.content}
              onBlur={(event) => props.updateToDo(event, props.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  props.updateToDo(event, props.id);
                }else if(event.key === 'Escape'){
                  props.cancelEdit(event, props.id);
                }
              }}
              className="border border-neutral-400 p-1 rounded-md text-xl"
            ></input>
          ) : (
            <p className={"text-xl " + props.styles}>{props.content}</p>
          )}
        </span>
      </div>
      <div>
        <button onClick={() => props.removeItem(props.id)}>
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  );
}

export default ListItem;
