import { useState } from "react";
import { signInUser } from "../../utils/firebase/firebase.utils";
import {
  SignInContainer,
  SignInTitle,
  FormLabel,
  FormInput,
  SignInButton,
} from "./sign-in.styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await signInUser(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <SignInContainer>
      <SignInTitle>Sign In</SignInTitle>
      <form onSubmit={handleSignIn}>
        <FormLabel>
          Email:
          <FormInput
            type="text"
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
        <SignInButton type="submit">Sign In</SignInButton>
      </form>
    </SignInContainer>
  );
}
