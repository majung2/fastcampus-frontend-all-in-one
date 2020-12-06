import React, { useRef, useState, useMemo, useCallback } from "react";
import "./App.css";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성사용자 세는중...");
  return users.filter((user) => user.active === true).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "majunge",
      email: "majunge@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "lalala",
      email: "lalala@gmail.com",
      active: false,
    },
    {
      id: 3,
      username: "SR",
      email: "SR@naver.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => users.concat(user));
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current);
    nextId.current += 1;
  }, [email, users]);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);
  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
