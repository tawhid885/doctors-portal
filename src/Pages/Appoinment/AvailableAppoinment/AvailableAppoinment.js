import { Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';



const appoin =[
    {
        id: 1,
        name: 'Cavity protection',
        time : "12pm - 1pm",
        space: 5
    },
    {
        id: 1,
        name: 'Cavity protection',
        time : "12pm - 1pm",
        space: 5
    },
    {
        id: 1,
        name: 'Cavity protection',
        time : "12pm - 1pm",
        space: 5
    },
    {
        id: 1,
        name: 'Cavity protection',
        time : "12pm - 1pm",
        space: 5
    },
    {
        id: 1,
        name: 'Cavity protection',
        time : "12pm - 1pm",
        space: 5
    },
    {
        id: 1,
        name: 'Cavity protection',
        time : "12pm - 1pm",
        space: 5
    },
]
const AvailableAppoinment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <div>
            <Typography variant='h4' sx={{mb: 2, color:"info.main"}}>available apoinment on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Booking Successfully !</Alert>}
            <Grid container spacing={2}>
                {
                    appoin.map(info=>(
                        <Booking key={info.id} info={info} date={date.toDateString()} setBookingSuccess={setBookingSuccess}></Booking>
                    )
                    )
                }
            </Grid>
        </div>
    );
};

export default AvailableAppoinment;