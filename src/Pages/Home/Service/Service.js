import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const {name, description, img} = props.service;
    return (
        <Card sx={{ minWidth: 275, boxshadow:0 }}>
             <CardMedia
                component = 'img'
                style={{width: 'auto', height: '80px', margin: '0 auto'}}
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
    </Card>
    );
};

export default Service;