import "../reset.css";
import "../App.css";
import ListItem from "./listItem";
import Form from "./form";
import BR from "./BR";
import { useState } from "react";
import NoTodos from "./noToDos";
import CheckAll from "./checkAll";
import Categiries from "./Categiries";

function Index() {
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

  let addToDo = (input) => {
    setTodos([
      ...toDos,
      {
        id: toDos.length + 1,
        title: input,
        isComplete: false,
      },
    ]);
  };
  const [filter, setfilter] = useState("All");

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

  let setToDosFunction = (items) => {
    setTodos(items);
  };
  let clearCompleted = () => {
    setTodos(toDos.filter((toDo) => !toDo.isComplete));
  };

  let checkAll = () => {
    const newToDo = toDos.map((toDo) => {
      toDo.isComplete = true;
      return toDo;
    });
    setTodos(newToDo);
  };

  function todosFiltered(filter) {
    if (filter === "All") {
      return toDos;
    } else if (filter === "Active") {
      return toDos.filter((toDO) => !toDO.isComplete);
    } else if (filter === "Completed") {
      return toDos.filter((toDO) => toDO.isComplete);
    }
  }
  
  function setCategory(name) {
    setfilter(name)
  }

  return (
    <div className="grid justify-start gap-4 grid-cols-1  w-1/3 max-[1080px]:w-1/2 max-[690px]:w-full relative top-32 m-auto bg-white p-8">
      <div className="w-full">
        <h2 className="font-bold text-2xl text-left">Todo App</h2>
      </div>

      <Form addToDo={addToDo} />

      {todosFiltered(filter).map((toDo, index) => (
        <ListItem
          styles={toDo.isComplete === true ? "line-through" : ""}
          key={toDo.id}
          toDo={toDo}
          removeItem={removeItem}
          check={check}
          isEditing={isEditing}
          updateToDo={updateToDo}
          cancelEdit={cancelEdit}
          clearCompleted={clearCompleted}
          
        />
      ))}
      {toDos.length > 0 ? (
        <>
          <BR />

          <CheckAll
            toDos={toDos}
            setTodos={setToDosFunction}
            checkAll={checkAll}
          />

          <BR />

          <Categiries clearCompleted={clearCompleted} setCategory={setCategory} filter={filter}/>
        </>
      ) : (
        <NoTodos />
      )}
    </div>
  );
}

export default Index;
