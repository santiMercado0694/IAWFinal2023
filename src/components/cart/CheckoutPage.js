import React from "react";
import { Box, Grid, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../../storeContext';
import Loading from '../layouts/Loading';
import CarouselCart from "../layouts/SliderCart";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";

const CheckoutPage = () => {
  // Hooks
  const { cart, loading, deleteProductCart, updateProductQuantity } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  const FormRow = () => (
    <React.Fragment>
      {cart.map((item) => (
        <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
          <CheckoutCard product={item} deleteProductCart={deleteProductCart} updateProductQuantity={updateProductQuantity} />
        </Grid>
      ))}
    </React.Fragment>
  );

  if (cart.length > 0) {
    return (
      <Box>
        <CarouselCart />
        <Box sx={{ flexGrow: 1, padding: "2rem" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align='center' gutterBottom variant='h4'>Mi carrito</Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}><FormRow /></Grid>
            <Grid item xs={12} sm={4} md={3}><Typography align='center' gutterBottom variant='h4'><Total cart={cart} /></Typography></Grid>
          </Grid>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <CarouselCart />
        <Box sx={{ flexGrow: 1, padding: "2rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography align='left' gutterBottom variant='h4'>No hay productos en tu carrito</Typography>
            </Grid>
            <Grid item xs={12}>
              <Link to="/">
                <Button marginTop="2rem" variant="contained" color="success">Volver a la tienda</Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
};

export default CheckoutPage;
