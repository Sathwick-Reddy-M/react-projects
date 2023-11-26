import { TaskAddition } from "../task-addition/task-addition.component";
import { TaskSearch } from "../task-search/task-search.component";
import { TaskList } from "../task-list/task-list.component";
import "./task-doing.styles.css";

export function TaskDoing() {
  return (
    <div>
      <h2>Doing</h2>
      <TaskAddition />
      <TaskSearch />
      <TaskList tasks={[]} />
    </div>
  );
}
