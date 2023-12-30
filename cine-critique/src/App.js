import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home.component";
import { SignIn } from "./components/sign-in/sign-in.component";
import { SignUp } from "./components/sign-up/sign-up.component";
import { Navigation } from "./components/navigation/navigation.component";
import { searchMovies } from "./utils/requests/requests.utils";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
