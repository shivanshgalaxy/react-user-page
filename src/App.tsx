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
import SignupPage from "./pages/SignupPage";
import UsersPage from "./pages/UsersPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { ToastContext } from "./ToastContext";

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
    localStorage.setItem("logged", JSON.stringify(isLogged));
  }, [isLogged]);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ users, setUser, isLogged, setLogged }}>
          <ToastContext.Provider value={{ showToast, setShowToast }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<SignupPage />} />
              <Route path="/users" element={<UsersPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
            </Routes>
          </ToastContext.Provider>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
