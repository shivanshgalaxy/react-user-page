import React, { useEffect, useState } from "react";
import { User } from "../App";
import SignupForm from "../components/SignupForm";
import Loading from "../components/Loading";
import SignupSuccessModal from "../components/SignupSuccessModal";
import { useNavigate } from "react-router-dom";
import signupSuccessModal from "../components/SignupSuccessModal";
// import {useGetUserDetails} from "../components/GetUserDetails";


function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("logged") || "{}") === true) {
      console.log("redirecting");
      navigate("/profile");
    }
  }, [navigate]);

  const postUser = async (newUser: User) => {
    try {
      const response = await fetch("http://localhost:3000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: newUser.firstName,
          email: newUser.email
        })
      });
      if(!response.ok) {
        setSignupSuccess(false);
      }

    } catch (err) {
      console.log(err);
    }

  };

  const handleUserChange = (newUser: User) => {
    postUser(newUser);
  };

  const handleSignup = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    signupSuccess ? setShowModal(true) : setShowModal(false); // Show the modal when the signup process is finished
  };

  const handleClose = () => {
    signupSuccess ? navigate("/profile") : navigate("/");
    setShowModal(false);
  }; // Hide the modal when it's closed

  if (isLoading) {
    return <Loading />;
  }

  return (
        <div className="input-form-container mt-3 mb-5">
          <h2>Register</h2>
          <SignupForm onUserChange={handleUserChange} onClick={handleSignup} isSuccess={signupSuccess}>
            Sign up
          </SignupForm>
          <SignupSuccessModal show={showModal} onHide={handleClose} isSuccess={signupSuccess}/>
        </div>
  );
}

export default SignupPage;
