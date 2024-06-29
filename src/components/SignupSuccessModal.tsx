import React from "react";
import { Modal, Button } from "react-bootstrap";

interface SignupSuccessModalProps {
  show: boolean;
  onHide: () => void;
  isSuccess: boolean;
}

const SignupSuccessModal: React.FC<SignupSuccessModalProps> = ({
  show,
  onHide,
    isSuccess
}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isSuccess ? "Signup Successful" : "Signup Unsuccessful"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{isSuccess ? "You have successfully signed up!" : "User already exists"}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupSuccessModal;
