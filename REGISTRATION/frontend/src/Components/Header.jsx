import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Login from "@mui/icons-material/Login";
import People from "@mui/icons-material/People";
import Home from "@mui/icons-material/Home";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className='container'>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>

          {/* <Button component={Link} to='/' color='inherit'>
            <People sx={{ mr: 1 }} />
            profile
          </Button> */}
          {/* <Button component={Link} to='Login' color='inherit'>
            <Login sx={{ mr: 1 }} />
            login
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
