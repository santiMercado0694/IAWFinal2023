import { useState } from 'react'
import { Box, createTheme } from '@mui/system';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { useGlobalContext } from '../../storeContext'
import Loading from '../layouts/Loading'
import Pagination from "../layouts/Pagination";
import Carousel from "../layouts/Slider";
import { useStateValue} from "../../StateProvider"
import Search from "../layouts/SearchBar";

export default function ProductContainer() {
  
const theme = createTheme();

 // Hooks

 const {productos, addProductCart, loading, search, setSearch} = useGlobalContext();
 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage] = useState(4);
 const [{user}] = useStateValue();


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

    <Search setSearch={setSearch}/>
    
    <Box sx={{ flexGrow: 1 , padding: theme.spacing(2)}}>
      
      <Grid container spacing={2}>
      {search.length === 0 ?(          
             currentPosts.map(product => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product  product={product} addProductCart={addProductCart} user={user} />
              </Grid>
             ))
      ):(
          productos.filter((product) => product.name.toLowerCase().includes(search)).map(product => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product  product={product} addProductCart={addProductCart} user={user} />
            </Grid>
           ))
       )}    
       </Grid>
       
    </Box> 
        {search.length === 0 ?(
          <Pagination postsPerPage={postsPerPage} totalPosts={productos.length} paginate={paginate} />
        ):(
            null
        )}
        
   </Box>
    
  );
}