import React, { useEffect } from "react";
import Header from "./components/Header"
import Userform from "./components/Userform";
import User from "./components/User";
import UserDetails from "./components/UserDetails"
import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./components/About";
import Edit from "./components/Edit";

const App = () => {

  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {

    const updatedUser = [user, ...users]
    setUsers(updatedUser);

  }

  const removeUserHandler = (id) => {
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsers)
  }

  useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setUsers(getUsers)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add" element={<Userform addUserHandler={addUserHandler} />} />
          <Route path="/" element={<User users={users} getUser={removeUserHandler} />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
