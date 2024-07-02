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

  const exitEdit = () => {
    setIsEditing(false);
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
        body: JSON.stringify({ firstName: newFirstName, email: email }),
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
          <Card style={{ width: "25rem" }} className="text-center">
            <Card.Header as="h5">Your profile</Card.Header>
            <Card.Body>
              <Image src="icon.jpg" roundedCircle fluid />
              <Row className="align-items-center mt-3 justify-content-md-center">
                <Col md="10">
                  {isEditing ? (
                    <Form className="text-body-emphasis">
                      <Form.Group controlId="formFirstName">
                        <Form.Label style={{ fontWeight: 'bold' }}>Enter new first name:</Form.Label>
                        <Form.Control
                          className="text-center"
                          type="text"
                          value={newFirstName}
                          onChange={(e) => setNewFirstName(e.target.value)}
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="mt-3 me-1"
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                      <Button
                        variant="primary"
                        className="mt-3"
                        onClick={exitEdit}
                      >
                        {" "}
                        Cancel{" "}
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
