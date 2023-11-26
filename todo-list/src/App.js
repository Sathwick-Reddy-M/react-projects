import logo from "./logo.svg";
import "./App.css";

import { TaskCategory } from "./components/task-category/task-category.component";

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <TaskCategory />
      <TaskCategory />
      <TaskCategory />
    </div>
  );
}

export default App;
