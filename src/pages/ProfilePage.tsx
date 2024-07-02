// import React, { useState } from "react";
// import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
//
// function ProfilePage() {
//   const [firstName, setFirstName] = useState(
//       JSON.parse(localStorage.getItem("firstName") || '""'),
//   );
//   const [email, setEmail] = useState(
//       JSON.parse(localStorage.getItem("email") || '""'),
//   );
//
//   const handleEdit = () => {
//
//   };
//
//   return (
//       <Container className="mt-5">
//         <Row className="justify-content-md-center">
//           <Col md="auto">
//             <Card style={{ width: '18rem' }}>
//               <Card.Header as="h5">Your profile</Card.Header>
//               <Card.Body>
//                <Image
//                     src="icon.jpg"
//                     roundedCircle
//                     fluid
//                 />
//                 <Row className="align-items-center mt-3">
//                   <Col md="10">
//                     <Card.Title>Welcome, {firstName}</Card.Title>
//                     <Card.Text>
//                       <strong>Email:</strong> {email}
//                     </Card.Text>
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </Card>
//             <div className="d-grid gap-2 mt-3">
//               <Button
//                   onClick={handleEdit}
//                   type="button"
//                   size="lg"
//               >
//                 Edit information
//               </Button>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//   );
// }
//
// export default ProfilePage;

import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Image,
  Form,
} from "react-bootstrap";

function ProfilePage() {
  const [firstName, setFirstName] = useState(
    JSON.parse(localStorage.getItem("firstName") || '""'),
  );
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("email") || '""'),
  );
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    localStorage.setItem("firstName", JSON.stringify(newFirstName));
    setFirstName(newFirstName);
    setIsEditing(false);

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName: newFirstName }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Handle success (optional)
    } catch (error) {
      console.error("There was a problem with the PUT request:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card style={{ width: "18rem" }}>
            <Card.Header as="h5">Your profile</Card.Header>
            <Card.Body>
              <Image src="icon.jpg" roundedCircle fluid />
              <Row className="align-items-center mt-3">
                <Col md="10">
                  {isEditing ? (
                    <Form>
                      <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={newFirstName}
                          onChange={(e) => setNewFirstName(e.target.value)}
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="mt-3"
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                    </Form>
                  ) : (
                    <>
                      <Card.Title>Welcome, {firstName}</Card.Title>
                      <Card.Text>
                        <strong>Email:</strong> {email}
                      </Card.Text>
                    </>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {!isEditing && (
            <div className="d-grid gap-2 mt-3">
              <Button onClick={handleEdit} type="button" size="lg">
                Edit information
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;