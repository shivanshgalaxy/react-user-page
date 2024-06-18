import InputForm from "./components/InputForm";
import "./App.css";
import { useState } from "react";
import ShowUsers from "./components/ShowUsers";
import GetUsers from "./components/GetUsers";

export interface User {
  email: string;
  first_name: string;
}

function App() {
  const [users, setUser] = useState<User[]>([]);

  const onUserChange = (newUser: User) => {
    setUser((oldUserList) => [...oldUserList, newUser]);
  };

  const onGetUserClick = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        data.data.map((item: User) => {
            const newUser: User = {
                email: item.email,
                first_name: item.first_name,
            };
            setUser((oldUserList) => [...oldUserList, newUser])
          console.log(item.first_name);
          console.log(item.email);
        });
      });
  };

  return (
    <>
      <div className="input-form-container mt-3 mb-5">
        <h2>Enter information here</h2>
        <InputForm onUserChange={onUserChange}></InputForm>
      </div>

      <div className="input-form-container mb-5">
        <h2 className="mb-5">OR</h2>
        <h2>Get users from an API here</h2>
        <GetUsers onClick={onGetUserClick}>Get users</GetUsers>
      </div>

      <div className="input-form-container">
        <ShowUsers userList={users}></ShowUsers>
      </div>
    </>
  );
}

export default App;
