// src/App.js

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import { Container, Button, CircularProgress, Grid } from "@mui/material";
import "./App.css"; // Import the CSS file for the black background

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const getUsers = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
        setShowUsers(true);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  };

  const handleSearch = (searchText) => {
    if (searchText.trim() === "") {
      setFilteredUsers([]);
      return;
    }

    const filtered = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <Navbar onGetUsers={getUsers} onSearch={handleSearch} />
      <Container sx={{ mt: 4 }}>
        
        {loading ? (
          <div className="text-center mt-4">
            <CircularProgress />
          </div>
        ) : showUsers ? (
          <Grid container spacing={2} mt={4}>
            {filteredUsers.length > 0
              ? filteredUsers.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))
              : users.map((user) => <UserCard key={user.id} user={user} />)}
          </Grid>
        ) : null}
      </Container>
    </div>
  );
}

export default App;
