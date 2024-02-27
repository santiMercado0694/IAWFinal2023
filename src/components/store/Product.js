import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fabClasses } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import { Link } from 'react-router-dom';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import LazyLoad from 'react-lazyload'; 

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

const CardWrapper = styled(Card)(({ theme }) => ({
  maxWidth: 420, 
  maxHeight: 900, 
  backgroundColor: '#eeeeee',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

export default function Product({
  product: { id, name, details, description, price, stock, category_id, image_path, rating },
  addProductCart,
  user
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardWrapper>
      <CardHeader
        action={
          <Typography className={fabClasses.action} variant="h5" color="textSecondary">
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader={stock > 0 ? 'Stock disponible: ' + stock : 'Sin Stock'}
      />

      {/* Utiliza LazyLoad para cargar las imágenes de manera diferida */}
      <LazyLoad height={200}>
        <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
          <img src={image_path} alt="imagen" style={{ width: '100%', height: 'auto' }} />
        </div>
      </LazyLoad>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {stock > 0 ? (
          <Link to={user ? '/cart' : '/signin'}>
            <IconButton
              aria-label="Add to Cart"
              onClick={user ? (event) => addProductCart(id, name, price, stock, image_path, rating) : 'error'}
            >
              <AddShoppingCartIcon fontSize="large" />
            </IconButton>
          </Link>
        ) : (
          <RemoveShoppingCartIcon fontSize="large" />
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
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </CardWrapper>
  );
}
