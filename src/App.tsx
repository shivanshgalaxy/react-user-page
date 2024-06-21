import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
import GetUsers from "./components/GetUsers";
import ShowUsers from "./components/ShowUsers";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./pages/Login";

interface UserContextType {
  users: User[];
  setUser: Dispatch<SetStateAction<User[]>>;
}

export const UserContext = createContext<UserContextType>({
  users: [],
  setUser: () => {},
});

export interface User {
  email: string;
  first_name: string;
}

function App() {
  const [users, setUser] = useState<User[]>([]);
  const onGetUserClick = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        data.data.map((item: User) => {
          const newUser: User = {
            email: item.email,
            first_name: item.first_name,
          };
          setUser((oldUserList) => [...oldUserList, newUser]);
          console.log(item.first_name);
          console.log(item.email);
        });
      });
  };

  return (
    <Router>
      <UserContext.Provider value={{users, setUser}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route></Route>
        </Routes>

        {/*<div className="input-form-container mb-5">*/}
        {/*  <h2 className="mb-5">OR</h2>*/}
        {/*  <h2>Get users from an API here</h2>*/}
        {/*  <GetUsers onClick={onGetUserClick}>Get users</GetUsers>*/}
        {/*</div>*/}

        {/*<div className="input-form-container">*/}
        {/*  <ShowUsers userList={users}></ShowUsers>*/}
        {/*</div>*/}
      </UserContext.Provider>
    </Router>
  );
}

export default App;
