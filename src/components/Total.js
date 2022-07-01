import React from "react";
import { Box } from '@mui/system';
import accounting from 'accounting';
import Button from '@mui/material/Button';
import Decimal from "decimal.js";

const Total = ({cart}) => {
    
const total = cart.reduce((acc, item) => {
    const itemPrice = new Decimal(item.price);
    return acc.plus(itemPrice.times(item.quantity)); 
}, new Decimal(0)); 
 
if(cart.length > 0) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "20vh" }}>
            <h5>Total item: {cart.reduce((acc, item) => acc + item.quantity, 0) }</h5>
            <h5> {accounting.formatMoney(total.toFixed(2))}</h5>
                <Button marginTop= "2rem" variant="contained" color="primary"> Check out </Button>          
        </Box>
    )
 }
}

export default Total