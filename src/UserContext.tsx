import React, {createContext} from "react";
import {User} from "./App";

interface UserContextType {
  users: User[];
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
}