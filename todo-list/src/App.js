import { Task } from "./components/task/task.component";
import "./App.css";

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <Task title="To-Do" />
      <Task title="Doing" />
      <Task title="Done" />
    </div>
  );
}

export default App;
