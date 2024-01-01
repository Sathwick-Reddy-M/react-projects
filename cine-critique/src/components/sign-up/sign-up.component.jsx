import { useState } from "react";
import { signUpUser } from "../../utils/firebase/firebase.utils";
import {
  SignUpContainer,
  SignUpTitle,
  FormLabel,
  FormInput,
  SignUpButton,
} from "./sign-up.styles";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpUser(username, email, password);
    } catch (error) {
      console.log(error);
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <SignUpContainer>
      <SignUpTitle>Sign Up</SignUpTitle>
      <form onSubmit={handleSignUp}>
        <FormLabel>
          Username:
          <FormInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormLabel>
        <br />
        <FormLabel>
          Email:
          <FormInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormLabel>
        <br />
        <FormLabel>
          Password:
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormLabel>
        <br />
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </form>
    </SignUpContainer>
  );
}
