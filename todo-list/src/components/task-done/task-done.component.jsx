import { TaskAddition } from "../task-addition/task-addition.component";
import { TaskSearch } from "../task-search/task-search.component";
import { TaskList } from "../task-list/task-list.component";
import "./task-done.styles.css";

export function TaskDone() {
  return (
    <div>
      <h2>Done</h2>
      <TaskAddition />
      <TaskSearch />
      <TaskList tasks={[]} />
    </div>
  );
}
