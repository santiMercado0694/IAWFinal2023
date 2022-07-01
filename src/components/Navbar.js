import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import { Box, createTheme } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/NombreTienda.png";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';


export default function Navbar() {

const theme = createTheme();
  return (
    <Box sx={{ flexGrow: 1 , marginBottom: "4rem" }}>
      <AppBar position="fixed" sx={{ bgcolor: "Silver" , boxShadow: "none"}}>
        <Toolbar>
          <Link to="/">
           <IconButton edge= "start" color="inherit" aria-label="menu">
             <img src={logo} alt="Bahia computacion"/>
           </IconButton>
          </Link>
          <Box sx={{flexGrow: 1 }}></Box>
          <Typography variant="h6" color="textPrimary" component="p">
            Hola Santi
          </Typography>
          <Link to="/signin">
            <Button variant="outlined" style={{ color: "black"}} sx={{ marginLeft: theme.spacing(2) }}>
              <strong>Iniciar Sesion</strong>
            </Button>
          </Link>
          <Link to="/cart">
          <IconButton aria-label='show cart items' color='inherit'>
            <Badge color="error">
                <ShoppingCart fontSize='large' color="primary"/>
            </Badge>
          </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}