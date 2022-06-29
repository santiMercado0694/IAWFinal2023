import * as React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { fabClasses } from '@mui/material';
import accounting from 'accounting';

export default function CheckoutCard({product : {id, name, price, stock, rating, image_path }}) {

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        action={
          <Typography
            className={fabClasses.action}
            variant='h5'
            color='textSecondary'
           >
            {accounting.formatMoney(price)}
           </Typography>
        }
        title= {name}
        subheader={"Stock disponible: "+stock}
      />

        <CardMedia 
        height= "200" 
        paddingTop= "56.25%" 
        component= "img"
        image= {image_path}
        alt="imagen" 
        />
    
      <CardActions sx={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
       <Box sx={{ display: "flex"}} >
        {Array(rating)
            .fill()
            .map((_, i) => (
               <p>&#11088;</p>
            ))
        }
       </Box>
        <IconButton> 
            <DeleteIcon fontSize="large"/>
        </IconButton>
        
      </CardActions>

    </Card>
  );
}