import { Task } from "./components/task/task.component";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState({ todo: [], doing: [], done: [] });
  return (
    <div>
      <h1>To-Do List</h1>
      <Task id="todo" title="To-Do" tasks={tasks} setTasks={setTasks} />
      <Task id="doing" title="Doing" tasks={tasks} setTasks={setTasks} />
      <Task id="done" title="Done" tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
