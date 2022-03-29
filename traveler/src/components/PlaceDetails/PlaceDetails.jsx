import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

const PlaceDetails =({ place })=>{
    const classes = useStyles();
    return(
        <Card elevation={6}>
            <CardMedia 
            style={{ heinght: 350 }}
            image={place.photo ? place.photo.images.large.url : 'https://www.instock.nl/app/uploads/2016/07/RubendeRuijterInstockUT-25.jpg'}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
            </CardContent>
        </Card>
    );
}
export default PlaceDetails;