import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fabClasses } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import { Link } from "react-router-dom";
import { useStateValue} from "../StateProvider"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function Product({product : {id, name, details, description, price, stock, category_id, image_path, rating }, addProductCart}) {
  const [expanded, setExpanded] = React.useState(false);

  const [{user}] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 350, backgroundColor: "#eeeeee"}}>
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
        subheader={stock> 0 ? "Stock disponible: "+stock : "Sin Stock"}
      />
      <CardMedia
        component="img"
        height="350"
        image={image_path}
        alt="imagen"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {details}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      {stock > 0 ? (
      <Link to={user ? "/cart" : "/signin"}>
        <IconButton  aria-label="Add to Cart" onClick={user & stock > 0 ? (event) => addProductCart(id,name,price,stock,image_path,rating) : "error"} disabled={stock > 0 ? "" : "true"}>
          <AddShoppingCartIcon fontSize='large'/>
        </IconButton>
       </Link>
      ) :( 
        <RemoveShoppingCartIcon fontSize='large'/>
      )}
        {Array(rating)
            .fill()
            .map((_, i) => (
               <p key={i}>&#11088;</p>
            ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripcion:</Typography>
          <Typography paragraph>
          {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}