import React from "react";
import { Modal, Button } from "react-bootstrap";

interface SignupSuccessModalProps {
  show: boolean;
  onHide: () => void;
}

const SignupSuccessModal: React.FC<SignupSuccessModalProps> = ({
  show,
  onHide,
}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Signup Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You have successfully signed up!</p>
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
