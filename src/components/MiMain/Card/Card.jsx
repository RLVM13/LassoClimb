import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardItem(props) {
  const favorito = (pos) => {
    alert("Favorito Agregado");
}

const encadenar = (pos) => {
    alert("Enhorabuena por completar tu objetivo !!");
}
  return (
    <Card sx={{ maxWidth: 1/4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.via}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sector : {props.sector}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Grado : {props.grado}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lugar : {props.lugar} - {props.provincia}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={favorito}>
          Favorito
        </Button>
        <Button size="small" color="primary" onClick={encadenar}>
          Encadenada
        </Button>
      </CardActions>
    </Card>
  );
}