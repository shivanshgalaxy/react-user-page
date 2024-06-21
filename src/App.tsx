import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction, useEffect,
} from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

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
  const [fetchedUsers, setFetchedUsers] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const getUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users', { signal });
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        data.data.forEach((item: User) => {
          const newUser = {
            email: item.email,
            first_name: item.first_name
          };
          setUser((oldUserList) => [...oldUserList, newUser]);
        });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    if(!fetchedUsers) {
      getUsers();
      setFetchedUsers(true);
    }

    // Cleanup function to abort fetch when component unmounts or re-renders
    return () => {
      abortController.abort();
    };
  }, [setUser]); // Dependency array ensures useEffect runs only when setUser changes
  return (
    <Router>
      <UserContext.Provider value={{ users, setUser }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
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
