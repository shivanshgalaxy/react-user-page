import { useContext, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Profile() {
  const [firstName, setFirstName] = useState(
    JSON.parse(localStorage.getItem("firstName") || "{}"),
  );
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("email") || "{}"),
  );
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card>
            <Card.Header as="h5">Your profile</Card.Header>
            <Card.Body>
              <Card.Title>Welcome, {firstName}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {email}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
