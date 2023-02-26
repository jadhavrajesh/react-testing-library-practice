import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {      
        const users = data.map(user=>({ name: user.name}));
        setUsers(users);
      })
      .catch(() => {
        setError("Error while fetching Users");
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      {error && <p>{error}</p>}

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
