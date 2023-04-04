import React, { useEffect, useState } from 'react';

const Liste = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.firstname} {user.lastname}</li>
        ))}
      </ul>
    </div>
  );
};

export default Liste;
