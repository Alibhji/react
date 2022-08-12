import React, { useState, useEffect } from "react";
import { Container, Button, Row } from "reactstrap";
import axios from "axios";

const AllUsersFunc = () => {
  const [users, setUsers] = useState([
    {
      email: "test2",
      name: "name",
      pass: "pass",
      id: "62da33609712f19c83fd1e9c",
    },
  ]);
  const [showDetails, setShowDetails] = useState(false);

  const fetchUsers = async (e) => {
    e.preventDefault();
    const response = await axios.get("http://localhost:3000/");
    // setUsers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchUsers(users);
  }, [users]);

  return (
    <Container className="user-list">
      <h1>My Contacts:</h1>
      <Row>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </Row>
      <Row>
        <form onSubmit={fetchUsers}>
          <input type="submit" value="Get Users" />
        </form>
      </Row>
    </Container>
  );
};

export default AllUsersFunc;
