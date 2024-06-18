import InputForm from "./components/InputForm";
import "./App.css";
import { useState } from "react";
import ShowUsers from "./components/ShowUsers";
import GetUsers from "./components/GetUsers";

interface User {
    email: string;
    first_name: string;
}

function App() {
  const [email, setEmail] = useState<string[]>([]);

  const [firstName, setName] = useState<string[]>([]);

  const [data, setData] = useState([])

  const onEmailChange = (newEmail: string) => {
    setEmail((oldEmailList) => [...oldEmailList, newEmail]);
    console.log(email);
  };

  const onNameChange = (newName: string) => {
    setName((oldNameList) => [...oldNameList, newName]);
    console.log(firstName);
  };

  const onGetUserClick = () => {
    fetch("https://reqres.in/api/users")
        .then(res => res.json())
        .then(data => {
            data.data.map((item: User) => {
                setEmail((oldEmailList) => [...oldEmailList, item.email]);
                setName((oldNameList) => [...oldNameList, item.first_name]);
                console.log(item.first_name);
                console.log(item.email);
            });
        });
  };

    console.log({data});
  return (
    <>
      <div className="input-form-container mt-3 mb-5">
        <h2>Enter information here</h2>
        <InputForm
          onEmailChange={onEmailChange}
          onNameChange={onNameChange}
        ></InputForm>
      </div>

      <div className="input-form-container mb-5">
        <h2 className="mb-5">OR</h2>
        <h2>Get users from an API here</h2>
        <GetUsers onClick={onGetUserClick}>Get users</GetUsers>
      </div>

      <div className="input-form-container">
        <ShowUsers emailList={email} firstNameList={firstName}></ShowUsers>
      </div>
    </>
  );
}

export default App;
