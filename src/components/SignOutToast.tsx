import React from 'react';
import {Toast, ToastContainer} from "react-bootstrap";

interface Props {
  show: boolean;
  setShowToast: (arg0: boolean) => void;
}

function SignOutToast({ show, setShowToast }: Props) {
    return (
        <ToastContainer position="top-end" id="toast-container">
            <Toast onClose={() => {
                setShowToast(false)
            }} show={show} bg="secondary">
                <Toast.Header>
                    <strong className="me-auto">Notice</strong>
                </Toast.Header>
                <Toast.Body className='Dark text-white'>Signed out</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default SignOutToast;