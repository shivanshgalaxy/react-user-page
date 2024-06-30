import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { SignupSuccessContext } from "../pages/SignupPage";

interface Props {
  show: boolean;
  onHide: () => void;
}

function SignupSuccessModal({ show, onHide }: Props) {
  const { signupSuccess } = useContext(SignupSuccessContext);
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {signupSuccess ? "Signup Successful" : "Signup Unsuccessful"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {signupSuccess
            ? "You have successfully signed up!"
            : "User already exists"}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignupSuccessModal;
