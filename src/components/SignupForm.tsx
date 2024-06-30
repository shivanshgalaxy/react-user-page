import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { User, UserContext } from "../App";
import { Form, Button } from "react-bootstrap";
import { SignupSuccessContext } from "../pages/SignupPage";

interface Props {
  onUserSubmit: (user: User) => Promise<unknown>;
  children: string;
}

function SignupForm({ onUserSubmit, children }: Props) {
  const { signupSuccess } = useContext(SignupSuccessContext);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newUser: User = {
      email: email,
      firstName: firstName,
    };

    onUserSubmit(newUser)
      .then(() => {
        localStorage.setItem("firstName", JSON.stringify(firstName));
        localStorage.setItem("email", JSON.stringify(email));
      })
      .catch((err) => console.error(err));
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
