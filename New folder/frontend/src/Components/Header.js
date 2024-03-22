import Box from "@mui/material/Box";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className='container'>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 0 }}
            ></IconButton>
            <Typography
              variant='h6'
              color='inherit'
              component={Link}
              to='/'
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              Home
              {/* <Home sx={{ ml: 0 }} /> */}
            </Typography>
            <Button component={Link} to='/' color='inherit'>
              {/* <People sx={{ mr: 1 }} /> */}
              profile
            </Button>
            <Button component={Link} to='/login' color='inherit'>
              {/* <Login sx={{ mr: 1 }} /> */}
              login
            </Button>
            <Button component={Link} to='/Signup' color='inherit'>
              {/* <Login sx={{ mr: 1 }} /> */}
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
