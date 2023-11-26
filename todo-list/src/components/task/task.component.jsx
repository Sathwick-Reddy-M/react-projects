import { useEffect, useRef, useState } from "react";
import { TaskAddition } from "../task-addition/task-addition.component";
import { TaskSearch } from "../task-search/task-search.component";
import { TaskList } from "../task-list/task-list.component";
import { StyledTitle } from "./task.styles.jsx";

export function Task({ id, title, tasks, setTasks }) {
  const ref = useRef(null);
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredTasks, setFilteredTasks] = useState({
    todo: [],
    doing: [],
    done: [],
  });

  useEffect(() => {
    let newTasks = { ...tasks };
    newTasks[id] = newTasks[id].filter((task) => {
      return task.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredTasks(newTasks);
  }, [tasks, searchValue]);

  const clickHandler = () => {
    const text = ref.current.value.trim();

    if (text === "") {
      alert("Task name missing");
      return;
    }
    let newTasks = { ...tasks, [id]: [...tasks[id], text] };
    setTasks(newTasks);
    ref.current.value = "";
  };

  const inputHandler = (e) => {
    const text = e.target.value;
    setSearchValue(text);
  };

  const deleteHandler = (index) => {
    let newTasks = { ...tasks };
    newTasks[id] = newTasks[id].filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const checkboxHandler = (index) => {
    const retrievedTask = tasks["doing"][index];
    let newTasks = {
      ...tasks,
      doing: tasks["doing"].filter((task, i) => i !== index),
      done: [...tasks["done"], retrievedTask],
    };
    setTasks(newTasks);
  };

  const startHandler = (index) => {
    const retrievedTask = tasks["todo"][index];
    let newTasks = {
      ...tasks,
      todo: tasks["todo"].filter((task, i) => i !== index),
      doing: [...tasks["doing"], retrievedTask],
    };
    setTasks(newTasks);
  };

  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <TaskAddition
        placeholder="Add Task"
        ref={ref}
        clickHandler={clickHandler}
      />
      <TaskSearch
        placeholder="Search Tasks"
        ref={searchRef}
        inputHandler={inputHandler}
      />
      <TaskList
        id={id}
        tasks={filteredTasks}
        deleteHandler={deleteHandler}
        checkboxHandler={checkboxHandler}
        startHandler={startHandler}
      />
    </div>
  );
}
