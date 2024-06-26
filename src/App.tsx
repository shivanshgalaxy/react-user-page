import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import Navbar from "./components/SiteNavbar";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { ToastContext } from "./ToastContext";
import SignOutToast from "./components/SignOutToast";

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
  setLogged: () => {},
});

export interface User {
  email: string;
  firstName: string;
}

function App() {
  const [users, setUser] = useState<User[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [isLogged, setLogged] = useState<boolean>(() => {
    const loggedStatus = localStorage.getItem("logged");
    return loggedStatus === "true";
  });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const getUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users", { signal });
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        console.log(data);
        data.forEach((item: User) => {
          const newUser = {
            email: item.email,
            firstName: item.firstName,
          };
          setUser((oldUserList) => [...oldUserList, newUser]);
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("logged", JSON.stringify(isLogged));
  }, [isLogged]);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ users, setUser, isLogged, setLogged }}>
          <ToastContext.Provider value={{ showToast, setShowToast }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Signup />} />
              <Route path="/users" element={<Users />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
          </ToastContext.Provider>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
