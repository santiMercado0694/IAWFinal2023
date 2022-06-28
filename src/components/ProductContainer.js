import * as React from 'react';
import { Box, createTheme } from '@mui/system';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../product-data';

export default function ProductContainer() {
const theme = createTheme();
  return (
    <Box sx={{ flexGrow: 1 , padding: theme.spacing(2)}}>
      <Grid container spacing={2}>
          {
             products.map(product => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Product key={product.id} product={product} />
              </Grid>
             ))
          }
       </Grid>

    </Box>
  );
}