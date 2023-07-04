import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chair from '../../../images/chair.png';
import Bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';

const banngerBg={
    background: `url(${Bg})`,
    
}

const verticalCenter ={
    display: 'flex',
    alignItems: "center",
    height: '450px',
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={banngerBg}>
        <Grid container spacing={2} >
          <Grid item xs={12} md={6} style={{...verticalCenter, textAlign:"left"}}>
            <Box>
            <Typography variant='h3'>
                Your New Smile <br/>
                Starts Here
            </Typography>
            <Typography variant="h6" sx={{my:3, fontSize:14, color: 'gray', fontWeight:300}}>
                lorem'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur '

            </Typography>
            <Button variant="contained" style={{backgroundColor:"#5CE7ED"}}>Get Appoinment</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
                <img style={{width: '350px'}} src={Chair}/>
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;