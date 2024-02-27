import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => (
  <footer style={{ backgroundColor: '#f5f5f5', padding: '1rem', textAlign: 'center' }}>
    <Typography variant="body1" color="text.secondary">
      Proyecto React IAW 2022
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Todos los derechos reservados ©{' '}
      <Link color="inherit" href="/">
        Bahia Computación
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  </footer>
);

export default Footer;
