import React, { useContext, useEffect, useState } from "react";
import { User, UserContext } from "../App";
import { Table } from "react-bootstrap";
import { Simulate } from "react-dom/test-utils";
import abort = Simulate.abort;
// import {GetUserDetails} from "../components/GetUserDetails";

function UsersPage() {
  const { users, setUser } = useContext(UserContext);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const getUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users", {
          signal,
        });
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
      setUser([]);
      abortController.abort();
    };
  }, []);

  return (
    <div className="input-form-container">
      <div className="container">
        <h2>Our users:</h2>
        {users.length === 0 && <div>There are no users yet :(</div>}
        {users.length !== 0 && (
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default UsersPage;
