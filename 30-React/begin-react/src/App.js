import React, { useRef } from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
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

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };
  return <UserList users={users} />;
}

export default App;
