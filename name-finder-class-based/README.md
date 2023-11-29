# [name-finder-class-based](https://vgznf7.csb.app/)

This project, `name-finder-class-based`, showcases a class based approach to building React components. It allows users to search for names from a list fetched from an API.

Checkout the react app [here](https://vgznf7.csb.app/)

## Components

### NameCard

1. A class component that displays individual name cards.
2. Utilizes fitered persons names to render a list of person's names.
3. Styled using `name-card.styles.css`.

### NameSearch

1. A class component for the search input.
2. Handles the search functionality, updating the parent component's state on change.
3. Styled using `name-search.styles.css`.

### App

1. The main class component that orchestrates the application.
2. Manages state for persons and search, and fetches user data on mount.
3. Filters the persons based on the search term and passes the filtered list to `NameCard`.

### Data Fetching

Data is fetched from [Dummy JSON](https://dummyjson.com/users) using `fetch` in the `componentDidMount` lifecycle method.
