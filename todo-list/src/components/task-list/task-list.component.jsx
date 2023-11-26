import "./task-list.styles.css";

export function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => {
        <li key={index} task></li>;
      })}
    </ul>
  );
}
