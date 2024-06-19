import InputForm from "./components/InputForm";
import "./App.css";
import { useState } from "react";
import ShowUsers from "./components/ShowUsers";
import GetUsers from "./components/GetUsers";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
          setUser((oldUserList) => [...oldUserList, newUser]);
          console.log(item.first_name);
          console.log(item.email);
        });
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark border-bottom border-body navbar-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Foobar Inc.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="input-form-container mt-3 mb-5">
        <h2>Enter information here</h2>
        <InputForm onUserChange={onUserChange}>Sign up</InputForm>
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
