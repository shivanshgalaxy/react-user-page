import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Home from "./pages/Home";

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
      <UserContext.Provider value={{ users, setUser }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />}></Route>
        </Routes>

        {/*<div className="input-form-container mb-5">*/}
        {/*  <h2 className="mb-5">OR</h2>*/}
        {/*  <h2>Get users from an API here</h2>*/}
        {/*  <GetUsers onClick={onGetUserClick}>Get users</GetUsers>*/}
        {/*</div>*/}
      </UserContext.Provider>
    </Router>
  );
}

export default App;
