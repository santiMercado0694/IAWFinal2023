import React, { useEffect, useState } from "react";
import { Box, createTheme } from '@mui/system';
import Grid from '@mui/material/Grid';
import Product from './Product';

export default function ProductContainer() {
  
const theme = createTheme();

 // Hooks

 const [productos, setProductos] = useState([]);
 
  
 // Fetch
 
 const getDataFromAPI = async() => {
   //const URL_productos = "https://serviciowebecommerce.herokuapp.com/products";
     const URL_productos = process.env.REACT_APP_API_URL+"/products";
     const response_productos = await fetch(URL_productos);
     const dataProductos = await response_productos.json();
     setProductos(dataProductos);

 }

 const addProductCart= async(id,name,price,stock,image_path,rating) => {
  const data = {
    id: id,
    name: name,
    price: price,
    stock: stock,
    quantity: 1,
    image_path: image_path,
    rating: rating
  }
  //const URL_POST_PRODUCTO = "https://serviciowebecommerce.herokuapp.com/products";
const URL_POST_PRODUCTO = process.env.REACT_APP_API_URL+"/products";
    const response_cart = await fetch(URL_POST_PRODUCTO, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => response_cart.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

}

 useEffect( () => {
     getDataFromAPI();
 }, []);



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