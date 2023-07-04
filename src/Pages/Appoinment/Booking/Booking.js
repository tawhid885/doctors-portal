import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = (props) => {
    const {id, name, time, space} = props.info
    console.log("p is", props.date)
    const date = props.date
    const setBookingSuccess = props.setBookingSuccess;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // console.log(props)
    return (
            <>
                <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{padding: '4px'}}>
                    <Typography variant='h5' sx={{color: 'info.main', fontWeight: 600}}>
                        {name}
                    </Typography>
                    <Typography variant='h6'>
                        {time}
                    </Typography>
                    <Typography variant='caption' display='block'>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} variant='contained' sx={{color: 'white'}}>BOOK APPOINMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
            name={name}
            time ={time}
            open={open}
            handleOpen={handleOpen} 
            handleClose={handleClose}
            date={date}
            setBookingSuccess={setBookingSuccess}
            ></BookingModal>
            </>
    );
};

export default Booking;