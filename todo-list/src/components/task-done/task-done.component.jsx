import { useState, useRef } from "react";
import { TaskAddition } from "../task-addition/task-addition.component";
import { TaskSearch } from "../task-search/task-search.component";
import { TaskList } from "../task-list/task-list.component";
import "./task-done.styles.css";

export function TaskDone() {
  const ref = useRef(null);
  const [tasks, setTasks] = useState([]);

  const clickHandler = () => {
    const text = ref.current.value.trim();

    if (text === "") {
      alert("Task name missing");
      return;
    }
    setTasks([...tasks, text]);
    ref.current.value = "";
  };

  return (
    <div>
      <h2>Done</h2>
      <TaskAddition ref={ref} clickHandler={clickHandler} />
      <TaskSearch />
      <TaskList tasks={tasks} />
    </div>
  );
}
