import { TaskTodo } from "./components/task-todo/task-todo.component";
import { TaskDoing } from "./components/task-doing/task-doing.component";
import { TaskDone } from "./components/task-done/task-done.component";
import "./App.css";

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <TaskTodo />
      <TaskDoing />
      <TaskDone />
    </div>
  );
}

export default App;
