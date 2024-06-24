import React, { useContext, useState } from "react";
import { UserContext, User } from "../App";
import SignupForm from "../components/SignupForm";
import Loading from "../components/Loading";
import SignupSuccessModal from "../components/SignupSuccessModal";

function Login() {
  const { users, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleUserChange = (newUser: User) => {
    setUser((oldUserList) => [...oldUserList, newUser]);
  };

  const handleSignup = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setShowModal(true); // Show the modal when the signup process is finished
  };

  const handleClose = () => setShowModal(false); // Hide the modal when it's closed

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="input-form-container mt-3 mb-5">
      <h2>Register</h2>
      <SignupForm onUserChange={handleUserChange} onClick={handleSignup}>Sign up</SignupForm>
      <SignupSuccessModal show={showModal} onHide={handleClose} />
    </div>
  );
}

export default Login;