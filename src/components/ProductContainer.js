import { useState } from 'react'
import { Box, createTheme } from '@mui/system';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { useGlobalContext } from '../storeContext'
import Loading from './Loading'
import Pagination from "./Pagination";
import Carousel from "./Slider";

export default function ProductContainer() {
  
const theme = createTheme();

 // Hooks

 const {productos, addProductCart, loading} = useGlobalContext();
 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage] = useState(4);

 //Pagination
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = productos.slice(indexOfFirstPost, indexOfLastPost);

 const paginate = pageNumber => setCurrentPage(pageNumber)

 if (loading) {
  return <Loading />
}

  return (
   <Box>
    <Carousel/>
    <Box sx={{ flexGrow: 1 , padding: theme.spacing(2)}}>
      <Grid container spacing={2}>
          {
             currentPosts.map(product => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product  product={product} addProductCart={addProductCart} />
              </Grid>
             ))
          }
          
       </Grid>
       
    </Box> 
          <Pagination postsPerPage={postsPerPage} totalPosts={productos.length} paginate={paginate} />  
   </Box>
    
  );
}