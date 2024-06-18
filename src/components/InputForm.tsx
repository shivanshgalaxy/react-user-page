import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onEmailChange: (email: string) => void;
  onNameChange: (firstName: string) => void;
}

function InputForm({ onEmailChange, onNameChange }: Props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onEmailChange(email);
    onNameChange(firstName);
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
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail1"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="inputUsername"
          value={firstName}
          onChange={handleNameChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default InputForm;
