import { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../App";

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
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="inputEmail1"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="inputUsername"
          value={firstName}
          onChange={handleNameChange}
          placeholder="Name"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {children}
      </button>
    </form>
  );
}

export default SignupForm;
