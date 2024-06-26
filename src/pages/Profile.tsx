import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";

function Profile() {
  const [firstName, setFirstName] = useState(
      JSON.parse(localStorage.getItem("firstName") || '""'),
  );
  const [email, setEmail] = useState(
      JSON.parse(localStorage.getItem("email") || '""'),
  );

  const handleEdit = () => {
    // Logic to edit the information
  };

  return (
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card>
              <Card.Header as="h5">Your profile</Card.Header>
              <Card.Body>
                <Row className="align-items-center">
                  <Col md="4">
                    <Image
                        src="icon.jpg"
                        roundedCircle
                        fluid
                    />
                  </Col>
                  <Col md="8">
                    <Card.Title>Welcome, {firstName}</Card.Title>
                    <Card.Text>
                      <strong>Email:</strong> {email}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <div className="d-grid gap-2 mt-3">
              <Button
                  onClick={handleEdit}
                  type="button"
                  size="lg"
              >
                Edit information
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
  );
}

export default Profile;
