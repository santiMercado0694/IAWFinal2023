import * as React from 'react';
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

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //{accounting.formatMoney(price, "$")}
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        action={
          <Typography
            className={fabClasses.action}
            variant='h5'
            color='textSecondary'
           >
            {accounting.formatMoney(50)}
           </Typography>
        }
        title="Placa de video Nvidia GeForce RTX 30 Series RTX 3090 24GB"
        subheader="En Stock"
      />
      <CardMedia
        component="img"
        height="300"
        image="https://http2.mlstatic.com/D_NQ_NP_904146-MLA43566866450_092020-O.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Placa de video
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCartIcon fontSize='large'/>
        </IconButton>
        {Array(4)
            .fill()
            .map((_, i) => (
               <p>&#11088;</p>
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
          Nvidia es el fabricante líder de placas de video; su calidad asegura una 
          experiencia positiva en el desarrollo del motor gráfico
          de tu computadora. Además, sus procesadores usan tecnología de punta 
          para que puedas disfrutar de un producto veloz y duradero.
          </Typography>
          <Typography paragraph>
          <Typography>Velocidad en cada lectura</Typography>
          Cuenta con 10496 núcleos, por lo que la interfaz de la placa será algo sorprendente. 
          Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas 
          caracterizadas por grandes volúmenes de datos.
          </Typography>
          <Typography paragraph>
          <Typography>Calidad de imagen</Typography>
          Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará.
          La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}