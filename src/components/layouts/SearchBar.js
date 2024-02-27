import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button } from '@mui/material';
import Box from '@mui/material/Box';
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
    padding: theme.spacing(1, 1, 1, 6),
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
  left: 0,
}));

const CustomSearchIcon = styled(SearchIcon)({
  color: '#555',
});

const ButtonWrapper = styled('div')(({ theme }) => ({
  marginLeft: 'auto', // Esto mueve el botón hacia la derecha
}));

export default function PrimarySearchAppBar({ onDownload, setSearch, categories, getProductsByCategory }) {

  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      window.deferredPrompt = event;
      setIsReadyForInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const downloadApp = async () => {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      console.log("oops, no prompt event guardado en window");
      return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    window.deferredPrompt = null;
    setIsReadyForInstall(false);
  };

  const handleFilter = ({ value }) => getProductsByCategory(value);

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { isDisabled }) => ({
      ...styles,
      backgroundColor: isDisabled ? 'red' : 'white',
      color: '#00000f',
      cursor: isDisabled ? 'not-allowed' : 'default',
    }),
  };

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

          <label htmlFor="category-select" style={{ marginRight: '8px' }}>Buscar por categoria:</label>
          <Select
            id="category-select"
            aria-label="Seleccionar categoría"
            styles={colourStyles}
            options={[{ label: 'Todos los productos', value: 'all' }, ...categories.map(cat => ({ label: cat.nombre, value: cat.id }))] }
            onChange={handleFilter}
            className="mb-0"
            placeholder="Filtrar producto por categoría"
            isSearchable={false}
          />
          <ButtonWrapper>
            {isReadyForInstall && <Button variant="contained" color="primary" onClick={downloadApp}>
              Descargar
            </Button>}
          </ButtonWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
