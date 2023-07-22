import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);
  const [index, setTaskIndex] = useState();
  const [buttonText, setButtonText] = useState("add");

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleAdd = () => {
    if (inputVal.trim() !== "") {
      setTask([
        ...task,
        {
          done: false,
          text: inputVal,
        },
      ]);
      setInputVal("");
    }
  };

  const handleEditToDO = (index) => {
    setInputVal(task[index].text);
    setButtonText("Save");
    setTaskIndex(index);
    console.log(index);
  };

  const handleSaveToDo = () => {
    if (inputVal.trim() !== "") {
      const newTasks = [...task];
      newTasks[index].text = inputVal;
      setTask(newTasks);
      setButtonText("Add");
      setInputVal("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
    setInputVal("");
    setButtonText("Add");
  };

  const handleToggleTodo = (index) => {
    const newTasks = [...task];
    newTasks[index].done = !newTasks[index].done;
    setTask(newTasks);
  };

  let sample = "Example Todo";
  return (
    <>
      <div className="main">
        <div className="card">
          <h1>{sample}</h1>
          <div className="todos">
            <Form
              inputvalue={inputVal}
              handleChange={handleInputChange}
              handleAdd={handleAdd}
              buttonText={buttonText}
              handleSave={handleSaveToDo}
            />
            <TodoList
              task={task}
              editText={handleEditToDO}
              handleDelete={handleDelete}
              index={index}
              handleToggle={handleToggleTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
