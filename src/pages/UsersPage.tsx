import React, { useContext, useEffect, useState } from "react";
import { User, UserContext } from "../App";
import { Pagination, Table } from "react-bootstrap";

function UsersPage() {
  const { users, setUser } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const lastIndex = itemsPerPage * currentPage;
  const firstIndex = lastIndex - itemsPerPage;
  const numberOfPages = Math.ceil(users.length / itemsPerPage);
  const pages = [...Array(numberOfPages + 1).keys()].slice(1);

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

  function onFirstClick() {
    setCurrentPage((current) => 1);
  }

  function onPrevClick() {
    if (currentPage > 1) {
      setCurrentPage((current) => current - 1);
    }
  }

  function onSelectedClick(pageNumber: number) {
    setCurrentPage((current) => pageNumber);
  }

  function onNextClick() {
    if (currentPage < numberOfPages) {
      setCurrentPage((current) => current + 1);
    }
  }

  function onLastClick() {
    setCurrentPage((current) => numberOfPages);
  }

  return (
    <>
      <div className="input-form-container" style={{ maxWidth: "60rem" }}>
        <h2>Our users:</h2>
        {users.length === 0 && <div>There are no users yet :(</div>}
        {users.length !== 0 && (
          <Table striped responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(firstIndex, lastIndex).map((user, index) => (
                <tr key={index}>
                  <td>{firstIndex + index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <Pagination className="d-flex justify-content-center">
          {numberOfPages >= 3 && <Pagination.First onClick={onFirstClick} />}
          <Pagination.Prev onClick={onPrevClick} />
          {pages.map((pageNumber) => (
            <Pagination.Item
              active={currentPage === pageNumber}
              onClick={() => onSelectedClick(pageNumber)}
            >
              {pageNumber}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={onNextClick} />
          {numberOfPages >= 3 && <Pagination.Last onClick={onLastClick} />}
        </Pagination>
      </div>
    </>
  );
}

export default UsersPage;
