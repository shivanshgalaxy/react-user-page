import { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../App";
import { Form, Button } from "react-bootstrap";

interface Props {
  onUserChange: (user: User) => void;
  onClick: () => void;
  children: string;
}

function SignupForm({ onUserChange, onClick, children }: Props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newUser: User = {
      email: email,
      first_name: firstName,
    };

    onUserChange(newUser);
    onClick();
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="inputEmail1">
        <Form.Control
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputUsername">
        <Form.Control
          type="text"
          value={firstName}
          onChange={handleNameChange}
          placeholder="Name"
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        {children}
      </Button>
    </Form>
  );
}

export default SignupForm;
