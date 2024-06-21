import React, { useContext } from "react";
import InputForm from "../components/InputForm";
import { UserContext, User } from "../App";

function Login() {
  const { users, setUser } = useContext(UserContext);

  const handleUserChange = (newUser: User) => {
    setUser((oldUserList) => [...oldUserList, newUser]);
  };

  return (
    <div className="input-form-container mt-3 mb-5">
      <h2>Register</h2>
      <InputForm onUserChange={handleUserChange}>Sign up</InputForm>
    </div>
  );
}

export default Login;
