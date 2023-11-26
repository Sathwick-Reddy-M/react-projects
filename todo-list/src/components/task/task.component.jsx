import { useEffect, useRef, useState } from "react";
import { TaskAddition } from "../task-addition/task-addition.component";
import { TaskSearch } from "../task-search/task-search.component";
import { TaskList } from "../task-list/task-list.component";
import "./task.styles.css";

export function Task({ title }) {
  const ref = useRef(null);
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(
      tasks.filter((task) => {
        return task.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [tasks, searchValue]);

  const clickHandler = () => {
    const text = ref.current.value.trim();

    if (text === "") {
      alert("Task name missing");
      return;
    }
    setTasks([...tasks, text]);
    ref.current.value = "";
  };

  const inputHandler = (e) => {
    const text = e.target.value;
    setSearchValue(text);
  };

  return (
    <div>
      <h2>{title}</h2>
      <TaskAddition ref={ref} clickHandler={clickHandler} />
      <TaskSearch ref={searchRef} inputHandler={inputHandler} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}
