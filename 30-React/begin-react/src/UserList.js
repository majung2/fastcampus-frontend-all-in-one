import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "majunge",
      email: "majunge@gmail.com",
    },
    {
      id: 2,
      username: "lalala",
      email: "lalala@gmail.com",
    },
    {
      id: 3,
      username: "SR",
      email: "SR@naver.com",
    },
  ];
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
}

export default UserList;
