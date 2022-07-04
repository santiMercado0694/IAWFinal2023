import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Review from './Review';
import { useGlobalContext } from '../storeContext'

const steps = ['Ultimo Paso'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const {cart, updateProductStock, deleteCart } = useGlobalContext();


  const handleChange = (e) => {
    setActiveStep(activeStep + 1);
    cart.map((product) => (
        updateProductStock(product.id, (product.stock - product.quantity))
    ))
    
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

          <React.Fragment>

            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por comprar en Bahia Computacion.
                </Typography>
                <Typography variant="subtitle1">
                  Su numero de orden es #20050. Gracias por confiar en nosotros

                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>

                {getStepContent(activeStep)}
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    onClick={(e) => handleChange(e)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Finalizar compra
                  </Button>
                </Box>

              </React.Fragment>

            )}

          </React.Fragment>

        </Paper>

      </Container>

    </ThemeProvider>
  );
}