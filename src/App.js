import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const getUserData = (data) => {
    setUserList((prevdata) => {
      const updatedusers = [...prevdata];
      updatedusers.unshift(data);
      return updatedusers;
    });
  };

  console.log(userList);

  return (
    <div>
      <AddUser getuserDataAPP={getUserData} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
