import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home.component";
import { SignIn } from "./components/sign-in/sign-in.component";
import { SignUp } from "./components/sign-up/sign-up.component";
import { Navigation } from "./components/navigation/navigation.component";
import "./App.css";
import { Movie } from "./components/movie/movie.component";
import { UserReviews } from "./components/user-reviews/user-reviews.component";
import { ReviewEditor } from "./components/review-editor/review-editor.componet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="movie/:movieId" element={<Movie />} />
        <Route path="reviews" element={<UserReviews />} />
        <Route path="reviewedit/:movieId" element={<ReviewEditor />} />
      </Route>
    </Routes>
  );
}

export default App;
