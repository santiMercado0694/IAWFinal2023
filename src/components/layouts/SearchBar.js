import React from 'react';
import Select from 'react-select';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 6), // Ajuste del padding izquierdo
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  left: 0, // Ajuste de posición izquierda
}));

const CustomSearchIcon = styled(SearchIcon)({
  color: '#555',
});

export default function PrimarySearchAppBar({ setSearch, categories, getProductsByCategory, getProductsFromAPI }) {

  const handleFilter = ({ value }) => {
    getProductsByCategory(value);
  }

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? 'red' : 'white',
        color: '#00000f',
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
  };

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: 'orange',
        primary: 'green',
      },
    };
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <CustomSearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar productos"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>

          <label htmlFor="category-select" style={{ marginRight: '8px' }}>Buscar por categoria:</label> {/* Etiqueta asociada al Select */}
          <Select
            id="category-select" // Establecer un id para el Select
            aria-label="Seleccionar categoría"
            theme={customTheme}
            styles={colourStyles}
            options={[
              { label: 'Todos los productos', value: 'all' },
              ...categories.map(cat => ({
                label: cat.nombre, value: cat.id
              }))
            ]}
            onChange={handleFilter}
            className="mb-0"
            placeholder="Filtrar producto por categoría"
          />

        </Toolbar>
      </AppBar>
    </Box>
  );
}
