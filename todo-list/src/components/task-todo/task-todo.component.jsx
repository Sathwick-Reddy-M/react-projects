import { TaskAddition } from "../task-addition/task-addition.component";
import { TaskSearch } from "../task-search/task-search.component";
import { TaskList } from "../task-list/task-list.component";
import "./task-todo.styles.css";

export function TaskTodo() {
  return (
    <div>
      <h2>To-Do</h2>
      <TaskAddition />
      <TaskSearch />
      <TaskList tasks={[]} />
    </div>
  );
}
