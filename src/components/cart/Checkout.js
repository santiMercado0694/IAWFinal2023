import React, { useState } from 'react';
import { CssBaseline, Box, Container, Paper, Stepper, Step, StepLabel, Button, Typography, createTheme, ThemeProvider } from '@mui/material';
import Review from './Review';
import { useGlobalContext } from '../../storeContext';
import { Link } from 'react-router-dom';

const steps = ['Ultimo Paso'];

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const { cart, updateProductStock, deleteCart } = useGlobalContext();

  const handleChange = () => {
    setActiveStep(activeStep + 1);
    cart.forEach((product) => updateProductStock(product.id, product.stock - product.quantity));
    deleteCart();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Finalizar Compra
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Gracias por comprar en Bahia Computacion.
              </Typography>
              <Typography variant="subtitle1">
                Su numero de orden es #20050. Gracias por confiar en nosotros
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button variant="contained" component={Link} to="/" sx={{ mr: 1 }}>
                  Volver a la tienda
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Review />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button variant="contained" onClick={handleChange} sx={{ mt: 3, ml: 1 }}>
                  Finalizar compra
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
