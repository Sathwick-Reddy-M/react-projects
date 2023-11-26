import {
  StyledList,
  StyledListItem,
  DeleteButton,
} from "./task-list.styles.jsx";

export function TaskList({ tasks, deleteHandler }) {
  return (
    <StyledList>
      {tasks.map((task, index) => {
        return (
          <StyledListItem key={index}>
            {task}
            <DeleteButton onClick={() => deleteHandler(index)}>X</DeleteButton>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}
