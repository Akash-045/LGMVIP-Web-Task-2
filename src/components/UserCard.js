import React from "react";
import { Grid, Paper, Avatar, Typography } from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          transform: "scale(1)",
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)", 
          transition: "transform 0.3s ease, background 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)", 
            background: "linear-gradient(45deg, #f44336 30%, #e91e63 90%)",
          },
        }}
      >
        <Avatar
          alt={`${user.first_name} ${user.last_name}`}
          src={user.avatar}
          sx={{ width: 100, height: 100, mx: "auto", my: 2 }}
        />
        <Typography variant="h6" align="center">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {user.email}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default UserCard;
