
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
import { Link } from "react-router-dom";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function CheckoutCard({product : {id, name, price, stock, quantity, image_path, rating, }, deleteProductCart, updateProductQuantity}) {

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
        subheader={"En stock: \n"+stock+ " Cantidad Seleccionada: "+quantity}
        
      />

        <CardMedia 
        component="img"
        height="350"
        image={image_path}
        alt="imagen" 
        />
    
      <CardActions sx={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
         <IconButton aria-label="Add to Cart" onClick={(quantity < stock) ? ((event) => updateProductQuantity(id, quantity+1)) : "error"} >
          <AddCircleIcon fontSize='large'/>
         </IconButton>
         <IconButton aria-label="Substract from cart" onClick={(quantity > 1) ? ((event) => updateProductQuantity(id, quantity-1)) : "error"} >
          <RemoveCircleIcon fontSize='large'/>
         </IconButton>
       <Box sx={{ display: "flex"}} >
        {Array(rating)
            .fill()
            .map((_, i) => (
               <p>&#11088;</p>
            ))
        }
       </Box>
       <Link to="/cart">
        <IconButton onClick={(event) => deleteProductCart(id)} > 
            <DeleteIcon fontSize="large"/>
        </IconButton>
      </Link>
        
      </CardActions>

    </Card>
  );
}