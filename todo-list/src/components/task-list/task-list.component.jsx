import {
  StyledList,
  StyledListItem,
  DeleteButton,
  Checkbox,
  StartButton,
} from "./task-list.styles.jsx";

export function TaskList({
  id,
  tasks,
  deleteHandler,
  checkboxHandler,
  startHandler,
}) {
  if (id === "todo") {
    return (
      <StyledList>
        {tasks[id].map((task, index) => (
          <StyledListItem key={`${id}-${index}`}>
            <StartButton onClick={() => startHandler(index)}>Start</StartButton>
            {task}
            <DeleteButton onClick={() => deleteHandler(index)}>X</DeleteButton>
          </StyledListItem>
        ))}
      </StyledList>
    );
  }
  if (id === "doing") {
    return (
      <StyledList>
        {tasks[id].map((task, index) => (
          <StyledListItem key={`${id}-${index}`}>
            <Checkbox
              type="checkbox"
              onChange={(e) => {
                e.target.checked = false;
                checkboxHandler(index);
              }}
            />
            {task}
            <DeleteButton onClick={() => deleteHandler(index)}>X</DeleteButton>
          </StyledListItem>
        ))}
      </StyledList>
    );
  }
  return (
    <StyledList>
      {tasks[id].map((task, index) => {
        return (
          <StyledListItem key={`${id}-${index}`}>
            {task}
            <DeleteButton onClick={() => deleteHandler(index)}>X</DeleteButton>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}
