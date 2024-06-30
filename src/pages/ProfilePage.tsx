import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";

function ProfilePage() {
  const [firstName, setFirstName] = useState(
      JSON.parse(localStorage.getItem("firstName") || '""'),
  );
  const [email, setEmail] = useState(
      JSON.parse(localStorage.getItem("email") || '""'),
  );

  const handleEdit = () => {

  };

  return (
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Header as="h5">Your profile</Card.Header>
              <Card.Body>
               <Image
                    src="icon.jpg"
                    roundedCircle
                    fluid
                />
                <Row className="align-items-center mt-3">
                  <Col md="10">
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

export default ProfilePage;
