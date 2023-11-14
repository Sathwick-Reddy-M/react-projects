# [name-finder-function-based](https://z42wvw.csb.app/)

This project, `name-finder-function-based`, is a demonstration of using functional components in React, enhanced with TypeScript. It allows users to search for names from a list fetched from an API.

## Components

### NameCard

1. A functional component that renders individual name cards.
2. Utilizes fitered persons names to render a list of person's names.
3. Styled using `name-card.styles.css`.

### NameSearch

1. A functional component for the search input.
2. Implements the search functionality, using the `eventHandler` prop to communicate with the parent component.
3. Styled using `name-search.styles.css`.

### App

1. The main functional component of the application.
2. Utilizes React hooks (useState, useEffect) for managing state and side effects.
3. Filters the user list based on the search term and passes it to `NameCard`.

### Data Fetching

Data is fetched from [Dummy JSON](https://dummyjson.com/users) and is handled through a custom utility function `getData`, using async-await.
