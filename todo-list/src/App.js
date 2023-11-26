import { Task } from "./components/task/task.component";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks
      ? JSON.parse(storedTasks)
      : { todo: [], doing: [], done: [] };
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
