# Movie Reviews App

This platform allows users to explore movies, read, and write reviews for movies. It utilizes Firebase for user authentication and Firestore for storing user details and reviews for each movie. React Context API is used for sharing user and user reviews data among the components.

Checkout the app [here](https://k997nc.csb.app/)

## Features

- **Search Movies:** Use the search feature to find information about your favorite movies.

- **View Movie Details:** Click on a movie to see detailed information, including ratings, cast, and more.

- **Write Reviews:** Registered users can write reviews for movies they have watched.

- **Edit and Delete Reviews:** Users can edit and delete their own reviews.

- **User Authentication:** Secure authentication system for user registration and sign-in.

## Technologies Used

- **React Context API:** React Context API is used for sharing user and user review information among the components.

- **Firebase:** User authentication is handled by Firebase.

- **Firestore:** User information and the review information are stored in Firestore.

- **Styled Components:** Styling is implemented using the Styled Components library.

- **OMDb API:** The Open Movie Database is used for getting movie information.

## Components

**Add Review Component:** The `AddReview` component allows users to add or edit reviews for a specific movie. It utilizes `ReactQuill` for a rich text editor, and users can save or delete their reviews.

**Home Component:** The `Home` component is the landing page of the application, providing a search bar for users to search for movies and TV shows. It renders the `SearchMovie` component.

**Movie Component:** The `Movie` component displays details about a specific movie, including its title, poster, and additional information. Users can also view reviews for the movie and add their own if logged in.

**Navigation Component:** The `Navigation` component provides navigation links for users. It changes dynamically based on whether the user is logged in or not, showing appropriate links like Home, Sign In, Sign Up, Sign Out, and Reviews.

**Review Component:** The `Review` component displays reviews for a specific movie. It fetches and renders reviews using data from Firebase. If there are no reviews, it displays a message.

**ReviewEditor Component:** The `ReviewEditor` component allows users to edit their existing reviews for a specific movie. It uses the `AddReview` component for review editing.

**SearchMovie Component:** The `SearchMovie` component fetches and displays a list of movies based on the user's search term. Each movie title is a link that leads to the individual movie page.

**SignIn & SignUp Components:** The `SignIn` and `SignUp` components provide forms for users to sign in or sign up. Users can input their email and password (and username for sign-up) to access or create an account.

**UserReviews Component:** The `UserReviews` component displays a user's reviews with links to edit each review. It utilizes the `DOMPurify` library for sanitizing and displaying sanitized HTML content.
