import { Box, createTheme } from '@mui/system';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { useGlobalContext } from '../storeContext'
import Loading from './Loading'

export default function ProductContainer() {
  
const theme = createTheme();

 // Hooks

 const {productos, addProductCart, loading} = useGlobalContext();

 if (loading) {
  return <Loading />
}

  return (
    <Box sx={{ flexGrow: 1 , padding: theme.spacing(2)}}>
      <Grid container spacing={2}>
          {
             productos.map(product => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product  product={product} addProductCart={addProductCart} />
              </Grid>
             ))
          }
       </Grid>

    </Box>
  );
}