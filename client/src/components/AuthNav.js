import React from "react";
import { useNavigate } from "react-router-dom";

import "../theme/authNav.css";
// import logo from "../assets/images/git.svg";
// import { Link } from "react-router-dom";
// import { Button } from ".";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const AuthNav = () => {
  let navigate = useNavigate();
  return (
    <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            School mgt system
          </Typography>
          <Button color="inherit" onClick={() => navigate("/users/login")}>Login</Button>
          <Button color="inherit" onClick={() => navigate("/users/register")}>Register</Button>
        </Toolbar>
      </AppBar>
  );
};

export default AuthNav;
