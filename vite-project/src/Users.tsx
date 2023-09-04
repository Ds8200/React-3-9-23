import React, { useState } from 'react';

type UsersObj = {
  id: number;
  name: string;
  email: string;
};

const Users = (): JSX.Element => {
  const [users, setUsers] = useState<UsersObj[]>([
    {
      id: 1,
      name: "Daniel",
      email: 'da@gmail.com'
    },
    {
      id: 2,
      name: "Hodaya",
      email: 'Ho@gmail.com'
    }
  ]);

  const [newUser, setNewUser] = useState<UsersObj>({
    id: 0,
    name: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const updatedUser = { ...newUser, [field]: e.target.value };
    setNewUser(updatedUser);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newUser.id === 0) {
      alert("User cannot have ID 0");
    } else {
      setUsers([...users, newUser]);
      setNewUser({ id: 0, name: '', email: '' });
    }
  };

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>ID: {user.id}, Name: {user.name}, Email: {user.email}.</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID: </label>
        <input
          type="number"
          id="id"
          value={newUser.id}
          onChange={(e) => handleInputChange(e, 'id')}
        />
        <br />
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={newUser.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={newUser.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Users;
