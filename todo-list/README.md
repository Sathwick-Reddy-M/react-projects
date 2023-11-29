# [To-Do List](https://98pwsq.csb.app)

This React application is a dynamic and interactive To-Do List, designed to help users efficiently manage their tasks. It features a user interface for adding, deleting, and searching tasks, categorized into "To-Do", "Doing", and "Done". The application leverages the React Hooks for state management and incorporates local storage for data persistence, ensuring user data is saved across sessions.

Checkout the react app [here](https://98pwsq.csb.app).

## Components

### TaskAddition

- **Functionality**: Allows users to add new tasks.
- **Features**:
  - Input field with a customizable placeholder.
  - Submit button to add tasks.
  - Key down event handling for easy task submission.
- **Usage**:
  - Type a task in the input field and either press the "+" button or the Enter key to add the task to the list.

### TaskList

- **Functionality**: Displays tasks in "To-Do", "Doing", or "Done" categories.
- **Features**:
  - Custom styled list items.
  - Start, delete, and checkbox buttons for task management.
  - Different rendering behavior based on the task category.
- **Usage**:
  - Click "Start" to move a task to the "Doing" category.
  - Click "X" to delete a task.
  - Check the checkbox to mark a task as "Done".

### TaskSearch

- **Functionality**: Enables searching within tasks.
- **Features**:
  - Styled search input for a seamless experience.
  - Dynamic filtering of tasks based on the search query.
- **Usage**:
  - Enter keywords in the search bar to filter out tasks.

### Task

- **Functionality**: Combines TaskAddition, TaskSearch, and TaskList components.
- **Features**:
  - Integrates task addition, searching, and listing functionalities.
  - Implements logic for task manipulation (add, delete, start, and mark as done).
  - Uses refs for input elements and state hooks for handling task data.
- **Usage**:
  - The main component where users interact with the task list.

### App

- **Functionality**: The root component that initializes and renders the Task components.
- **Features**:
  - Initializes the state with tasks from local storage or defaults to empty lists.
  - Persists tasks in local storage on state update.
  - Renders Task components for each category: "To-Do", "Doing", and "Done".
- **Usage**:
  - The entry point of the application, rendering the entire To-Do list structure.

## Styling

The project utilises the `styled-components` for a consistent and maintainable styling approach
