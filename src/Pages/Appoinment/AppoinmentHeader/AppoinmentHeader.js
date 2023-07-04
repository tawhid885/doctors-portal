import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppoinmentHeader = ({date, setDate}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} style={{width: '100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;