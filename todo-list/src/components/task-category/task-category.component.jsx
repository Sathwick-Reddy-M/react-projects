import { TaskSearch } from "../task-search/task-search.component";
import { TaskList } from "../task-list/task-list.component";
import "./task-category.styles.css";

export function TaskCategory() {
  return (
    <div>
      <div>
        <input type="text" name="" id="" placeholder="Add Task" />
        <button>+</button>
      </div>
      <TaskSearch />
      <TaskList />
    </div>
  );
}
