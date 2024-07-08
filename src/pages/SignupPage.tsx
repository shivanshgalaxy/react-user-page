import React, { createContext, useContext, useEffect, useState } from "react";
import { User, UserContext } from "../App";
import SignupForm from "../components/SignupForm";
import Loading from "../components/Loading";
import SignupSuccessModal from "../components/SignupSuccessModal";
import { useNavigate } from "react-router-dom";

interface SignupSuccessContextType {
  signupSuccess: boolean;
}

export const SignupSuccessContext = createContext<SignupSuccessContextType>({
  signupSuccess: true,
});

function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(true);
  const { setLogged } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("logged") || "{}") === true) {
      navigate("/profile");
    }
  }, [navigate]);

  function handleUserChange(newUser: User) {
    return new Promise(async (resolve, reject) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_DATABASE_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: newUser.firstName,
            email: newUser.email,
          }),
        });
        if (response.ok) {
          setSignupSuccess(true);
          setLogged(true);
          resolve("Sign up successful");
        } else {
          setSignupSuccess(false);
          reject(new Error("Failed to sign up"));
        }
        setIsLoading(false);
        setShowModal(true);
      } catch (err) {
        setIsLoading(false); // Ensure loading state is reset in case of error
        reject(err);
      }
    });
  }

  const handleClose = () => {
    if (signupSuccess) {
      navigate("/profile");
    }
    setShowModal(false);
  }; // Hide the modal when it's closed

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SignupSuccessContext.Provider value={{ signupSuccess }}>
      <div className="input-form-container mt-3 mb-5">
        <h2>Register</h2>
        <SignupForm onUserSubmit={handleUserChange}>Sign up</SignupForm>
        <SignupSuccessModal show={showModal} onHide={handleClose} />
      </div>
    </SignupSuccessContext.Provider>
  );
}

export default SignupPage;
