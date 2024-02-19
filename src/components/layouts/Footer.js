import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Todos los derechos reservados © '}
      <Link color="inherit" href="/">
        Bahia computacion
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <>
      <CssBaseline />
      <footer style={{ backgroundColor: 'lightgray', padding: '1rem' }}>
        <Container maxWidth="sm">
          <Typography variant="body1">Proyecto React IAW 2022</Typography>
          <Copyright />
        </Container>
      </footer>
    </>
  );
}
