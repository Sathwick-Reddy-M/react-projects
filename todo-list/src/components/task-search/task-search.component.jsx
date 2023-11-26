import "./task-search.styles.css";

export function TaskSearch({ name, id, placeholder }) {
  return <input type="search" name={name} id={id} placeholder={placeholder} />;
}
