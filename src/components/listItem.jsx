import "../App.css";

function ListItem(props) {
  return (
    <div className="flex justify-between w-full mt-4">
      <div className="flex gap-4">
        <input type="checkbox"></input>
        <p className={"text-xl " + props.styles}>{props.content}</p>
      </div>
      <div>
        <button>
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  );
}

export default ListItem;
