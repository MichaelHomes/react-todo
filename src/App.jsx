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
      {/* <div className="main">
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
      </div> */}
      <div class="lg:flex">
        <div class="lg:w-72 lg:h-screen md:hidden lg:block lg:bg-black px-4 pt-4 relative">
          <div class="flex gap-4">
            <div class="flex items-center gap-4 w-3/4 border-gray-500 border-2 p-2 rounded-lg">
              <svg
                class="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <line x1="12" y1="5" x2="12" y2="19" />{" "}
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <p class="text-white">New chat</p>
            </div>
            <div class="border-gray-500 border-2 p-2 rounded-lg w-3/12">
              <svg
                class="h-6 w-6 text-white mx-auto"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
                <line x1="4" y1="10" x2="20" y2="10" />{" "}
                <line x1="10" y1="4" x2="10" y2="20" />
              </svg>
            </div>
          </div>
          <div class="absolute left-0 right-0 bottom-0 border-t-2 border-gray-400 py-4 px-4">
            <div class="flex justify-between gap-3">
              <div class="flex gap-2">
                <svg
                  class="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <p class="text-white">Upgrade Plus</p>
              </div>
              <span class="py-1 px-2 uppercase bg-[#fae69e] justify-end rounded-md">
                new
              </span>
            </div>
            <div class="flex justify-between mt-2">
              <div class="flex gap-3">
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="text-white">ChatGPT User</p>
              </div>
              <a href="#">...</a>
            </div>
          </div>
        </div>
        <div class="lg:w-[calc(100% - 288px)] lg:relative">
          <div class="fixed top-0 left-0 right-0 lg:absolute">
            <div class="bg-Customgray p-5 md:hidden relative border-neutral-400 border-y-2">
              <div class="space-y-2">
                <span class="block w-8 h-1 bg-white"></span>
                <span class="block w-8 h-1 bg-white"></span>
                <span class="block w-8 h-1 bg-white"></span>
              </div>
              <p class="text-center absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
                New chat
              </p>
              <div class="absolute right-5 top-0 bottom-0 flex items-center">
                <svg
                  class="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <line x1="12" y1="5" x2="12" y2="19" />{" "}
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
            <div class="p-1 bg-black mx-4 mt-4 rounded-xl flex sm:mx-28 md:mx-40 lg:w-1/3 lg:mx-auto">
              <button class="text-white relative groupe inline-flex justify-center md:text-sm gap-2 items-center w-1/2 py-4 bg-Customgray rounded-lg sm:py-2">
                <svg
                  class="h-8 w-8 text-lime-600 md:h-6 md:w-6"
                  viewBox="0 0 24 24"
                  fill="#90EE90"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                GPT-3.5
              </button>
              <button class="text-gray-400 w-1/2 inline-flex justify-center md:text-sm gap-2 items-center py-4">
                GPT-4
                <svg
                  class="h-5 w-5 text-gray-400 md:h-6 md:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  />{" "}
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </button>
            </div>
            <div class="text-white hidden bg-red-100 groupe-hover:block">
              test
            </div>
          </div>
          <div class="bg-Customgray pt-40 px-4 pb-36 sm:px-28 md:pt-20 md:px-10 lg:px-0 lg:h-screen">
            <h1 class="text-4xl text-white text-center mt-6 mb-6 lg:mt-20">
              ChatGPT
            </h1>

            <div class="md:flex md:gap-2 md:mt-16 md:justify-center lg:justify-center lg:w-2/3 lg:mx-auto lg:gap-4">
              <div>
                <div class="flex justify-center items-center gap-3 md:flex-col">
                  <svg
                    class="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span class="text-white lg:text-lg">Examples</span>
                </div>
                <div class="mt-4 flex flex-col gap-3.5 mb-8">
                  <button class="bg-Buttongray text-white p-3 md:text-sm lg:text-lg rounded-md w-full dark:hover:bg-gray-900 lg:py-4 lg:px-6">
                    "Explain quantum computing in simple terms"
                  </button>
                  <button class="bg-Buttongray text-white p-3 md:text-sm lg:text-lg rounded-md w-full dark:hover:bg-gray-900 lg:py-4 lg:px-6">
                    "Got any creative ideas for a 10 year old’s birthday?"
                  </button>
                  <button class="bg-Buttongray text-white p-3 md:text-sm lg:text-lg rounded-md w-full dark:hover:bg-gray-900 lg:py-4 lg:px-6">
                    "How do I make an HTTP request in Javascript?"
                  </button>
                </div>
              </div>
              <div>
                <div class="flex justify-center items-center gap-3 md:flex-col">
                  <svg
                    class="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  <span class="text-white lg:text-lg">Capabilities</span>
                </div>
                <div class="mt-4 flex flex-col gap-3.5 mb-8">
                  <button class="bg-Buttongray text-white p-3 md:text-sm lg:text-lg rounded-md w-full lg:py-4 lg:px-6">
                    Explain quantum computing in simple terms
                  </button>
                  <button class="bg-Buttongray text-white p-3 md:text-sm lg:text-lg rounded-md w-full lg:py-4 lg:px-6">
                    Got any creative ideas for a 10 year old’s birthday?
                  </button>
                  <button class="bg-Buttongray text-white p-3 md:text-sm lg:text-lg rounded-md w-full lg:py-4 lg:px-6">
                    How do I make an HTTP request in Javascript?
                  </button>
                </div>
              </div>
              <div>
                <div class="flex justify-center items-center gap-3 md:flex-col">
                  <svg
                    class="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />{" "}
                    <line x1="12" y1="9" x2="12" y2="13" />{" "}
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span class="text-white lg:text-lg">Limitations</span>
                </div>
                <div class="mt-4 flex flex-col gap-3.5 mb-8">
                  <button class="bg-Buttongray text-white p-3 md:text-sm lg:text-lg rounded-md w-full lg:py-4 lg:px-6">
                    May occasionally generate incorrect information
                  </button>
                  <button class="bg-Buttongray text-white p-3 md:text-sm lg:text-lg rounded-md w-full lg:py-4 lg:px-6">
                    May occasionally produce harmful instructions or biased
                    content
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="fixed bottom-0 left-0 right-0 border-neutral-400 border-y-2 bg-Customgray px-4 py-3 lg:w-9/12 lg:border-none lg:m-auto lg:absolute">
            <form>
              <div class="relative text-gray-600 focus-within:text-gray-400">
                <input
                  class="w-full rounded-xl focus-visible:outline-none bg-Buttongray shadow-xs dark:shadow-xs px-4 py-4"
                  placeholder="Send a message"
                ></input>
                <span class="absolute inset-y-0 right-4 flex items-center pl-2">
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      class="h-8 w-8 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <line x1="22" y1="2" x2="11" y2="13" />{" "}
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </span>
              </div>
            </form>
            <p class="text-gray-400 mt-2 md:text-sm">
              Free Research Preview. ChatGPT may produce inaccurate information
              about people, places, or facts.
              <a class="underline ml-1" href="#">
                ChatGPT July 20 Version
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
