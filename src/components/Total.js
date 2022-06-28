import React from 'react';
import { Box } from '@mui/system';
import accounting from 'accounting';
import Button from '@mui/material/Button';

const Total = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "20vh" }}>
            <h5>Total items: 3</h5>
            <h5> {accounting.formatMoney(50)}</h5>
                <Button marginTop= "2rem" variant="contained" color="primary"> Check out </Button>          
        </Box>
    )
}

export default Total