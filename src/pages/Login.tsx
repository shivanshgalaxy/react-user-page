import React, { useContext, useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { UserContext, User } from "../App";
import Loading from "../components/Loading";

function Login() {
  const { users, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserChange = (newUser: User) => {
    setUser((oldUserList) => [...oldUserList, newUser]);
  };

  const handleSignup = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="input-form-container mt-3 mb-5">
      <h2>Register</h2>
      <SignUpForm onUserChange={handleUserChange} onClick={handleSignup}>Sign up</SignUpForm>
    </div>
  );
}

export default Login;