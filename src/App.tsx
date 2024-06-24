import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction, useEffect,
} from "react";
import Navbar from "./components/SiteNavbar";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

interface UserContextType {
  users: User[];
  setUser: Dispatch<SetStateAction<User[]>>;
  isLogged: boolean;
  setLogged: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextType>({
  users: [],
  setUser: () => {},
  isLogged: false,
  setLogged: () => {}
});

export interface User {
  email: string;
  first_name: string;
}

function App() {
  const [users, setUser] = useState<User[]>([]);
  const [isLogged, setLogged] = useState(false);


  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const isLogged = JSON.parse(localStorage.getItem('logged') || "{}");
    if(isLogged) {
      setLogged(isLogged === "true");
    }

    const getUsers = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users", { signal });
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
    getUsers();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ users, setUser, isLogged, setLogged }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
