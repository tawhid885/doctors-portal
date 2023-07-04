import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 78, 0.9)',
    backgroundBlendMode:'darken, luminosity',
    marginTop: 175
}

const AppoinmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                    style={{width:400, marginTop:'-110px' }} 
                    src={Doctor}/>
                </Grid>
                <Grid item xs={12} md={6} sx={{display: 'flex', 
                justifyContent:"flex-start", textAlign:"left", alignItems:"center"}}>
                    <Box style={{}}>
                        <Typography variant="h6" sx={{mb:5}} style={{color:'#5CE7ED'}}>
                            Appoinment
                        </Typography>
                        <Typography variant="h6" >
                            Make an appoinment today
                        </Typography>
                        <Typography variant="h4" sx={{my:3}} style={{color:'white', fontSize: 14, fontWeight: 300}}>
                            Lorem ipsum sdslfs s skfskjfs sdfslkf ss flksfjl dklskl djskf  sjkjdk sdkflkf fjotlj dkjlk
                        </Typography>
                        <Button variant='contained' style={{backgroundColor:"#5CE7ED"}}>Learn More</Button>
                        </Box>
                </Grid>
            </Grid>
    </Box>
    );
};

export default AppoinmentBanner;