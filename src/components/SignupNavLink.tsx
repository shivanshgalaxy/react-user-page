import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function SignupNavLink() {
    return (
        <Nav.Link as={Link} to="/login" active>
            Sign up
        </Nav.Link>
    );
}

export default SignupNavLink;