import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, createTheme, Toolbar, Button, IconButton, Badge } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/NombreTienda.webp';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../../reducer';
import { useGlobalContext } from '../../storeContext';

export default function Navbar() {
  const [{ user }, dispatch] = useStateValue();
  const { cart, deleteCart } = useGlobalContext();
  const history = useHistory();

  const handleAuth = (e) => {
    if (user) {
      auth.signOut();
      dispatch({ type: actionTypes.SET_USER, user: null });
      deleteCart();
      history.push('/');
    }
  };

  const theme = createTheme();

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '4rem' }}>
      <AppBar position="fixed" sx={{ bgcolor: 'Silver', boxShadow: 'none' }}>
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img src={logo} alt="Bahia computacion" />
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Link to="/signin" aria-label="Iniciar sesión">
            <Button
              variant="outlined"
              onClick={(e) => handleAuth(e)}
              style={{ color: 'black' }}
              sx={{ marginLeft: theme.spacing(2) }}
            >
              <strong>{user ? 'Cerrar sesión' : 'Iniciar sesión'}</strong>
            </Button>
          </Link>
          {user && (
            <Link to="/cart" aria-label="Ver carrito">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={cart.reduce((acc, item) => acc + item.quantity, 0)} color="error">
                  <ShoppingCart fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
