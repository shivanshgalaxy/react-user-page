import React, { useContext, useEffect, useState } from "react";
import { User, UserContext } from "../App";
import {Table} from "react-bootstrap";

function Users() {
  const { users, setUser } = useContext(UserContext);

  return (
    <div className="input-form-container">
      <div className="container">
        <h2>Our users:</h2>
        {users.length === 0 && <div>There are no users yet :(</div>}
        {users.length !==0 &&
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
        }
      </div>
    </div>
  );
}

export default Users;
