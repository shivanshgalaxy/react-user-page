import React from 'react';
import { Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

function Profile() {
    return (
      <Nav.Link as={Link} to="/profile" active>
        Profile
      </Nav.Link>
    );
}

export default Profile;