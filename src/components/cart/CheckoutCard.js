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

  const imageUrl = require('../../assets/desktop/'+ image_path); 

  return (
    <Card sx={{ maxWidth: 400 }}>
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
        subheader={"En stock: "+stock}
        
      />

        <CardMedia 
        component="img"
        height="350"
        image={imageUrl}
        alt="imagen"
        style={{ 
          display: 'flex',
          justifyContent: 'center', // Centrar horizontalmente
          alignItems: 'center', // Centrar verticalmente
          width: '100%', 
          height: '400px', 
          overflow: 'hidden' }} 
        />

      <Typography 
        variant="h6" 
        color='textSecondary' 
        sx={{ ml: 2 }} // Aplicando un margen izquierdo de 2 unidades
      > 
        {"Cantidad Seleccionada: " + quantity} 
      </Typography>
    
      <CardActions sx={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>

         <IconButton aria-label="Sumar cantidad del producto" onClick={(quantity < stock) ? ((event) => updateProductQuantity(id, quantity+1)) : "error"} >

          <AddCircleIcon fontSize='large'/>

         </IconButton>

         <IconButton aria-label="Restar cantidad del producto" onClick={(quantity > 1) ? ((event) => updateProductQuantity(id, quantity-1)) : "error"} >

          <RemoveCircleIcon fontSize='large'/>

         </IconButton>

       <Link to="/cart">

        <IconButton aria-label="Quitar producto del carrito" onClick={(event) => deleteProductCart(id)} > 

            <DeleteIcon fontSize="large"/>

        </IconButton>
        
       </Link>
        
      </CardActions>

    </Card>
  );
}