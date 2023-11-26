import "./task-addition.styles.css";

export function TaskAddition({ name, id, placeholder }) {
  return (
    <div>
      <input type="text" name={name} id={id} placeholder={placeholder} />
      <button>+</button>
    </div>
  );
}
