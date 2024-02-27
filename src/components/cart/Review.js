import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useGlobalContext } from '../../storeContext';
import Decimal from "decimal.js";
import accounting from 'accounting';

export default function Review() {
  const { cart } = useGlobalContext();

  const total = cart.reduce((acc, item) => {
    const itemPrice = new Decimal(item.price);
    return acc.plus(itemPrice.times(item.quantity)); 
  }, new Decimal(0)); 

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Resumen de compra
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.quantity} />
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            <h5>{accounting.formatMoney(total.toFixed(2))}</h5>
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
