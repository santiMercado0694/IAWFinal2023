import { useState } from 'react';
import { Box, createTheme } from '@mui/system';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { useGlobalContext } from '../../storeContext';
import Loading from '../layouts/Loading';
import Pagination from "../layouts/Pagination";
import { useStateValue } from "../../StateProvider";
import SearchBar from "../layouts/SearchBar";

export default function ProductContainer() {
  const theme = createTheme();
  const { productos, addProductCart, loading, search, setSearch, categories, getProductsByCategory } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [{ user }] = useStateValue();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const setPaginationPage = page => setCurrentPage(page);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box>
      <SearchBar setSearch={setSearch} categories={categories} getProductsByCategory={getProductsByCategory} setPaginationPage={setPaginationPage} />
      <Box sx={{ flexGrow: 1, padding: theme.spacing(2) }}>
        <Grid container spacing={2}>
          {search.length === 0 ? (
            currentPosts.map(product => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} addProductCart={addProductCart} user={user} />
              </Grid>
            ))
          ) : (
            productos.filter(product => product.name.toLowerCase().includes(search.toLowerCase())).map(product => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} addProductCart={addProductCart} user={user} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
      {search.length === 0 ? (
        <Pagination postsPerPage={postsPerPage} totalPosts={productos.length} paginate={paginate} />
      ) : null}
    </Box>
  );
}
