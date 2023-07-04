import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const BookingModal = ({name, time, open, handleClose, date, setBookingSuccess}) => {
    const {user} = useAuth();
    const initialInfo = {name: name, patient_name: user.displayName, patient_email: user.email, patient_phone:"",time: time}
    console.log("name is ", date)
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleBookSubmit=e=>{
      const appointment = {...bookingInfo, date}
        alert("submitting");
        console.log("all", appointment)

        // send to server 
        fetch("http://localhost:5000/appointments",{
          method: "POST",
          headers: {
            'content-type':'application/json'
          },
          body : JSON.stringify(appointment),
        })
        .then(res=> res.json())
        .then(data =>{
          if(data.insertedId){
            setBookingSuccess(true)
          }
          handleClose();
        })
        
        e.preventDefault();
    }

    const handleOnBlur=(e)=>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo ={...bookingInfo}
      newInfo[field] = value;
      console.log("new info ", newInfo);
      setBookingInfo(newInfo);
      e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" sx={{mb:2}}>
              {name}
            </Typography>
            
            <form onSubmit={handleBookSubmit}>
            <TextField
            disabled
            sx={{width:"90%", m:1}}
            label="Time"
            id="outlined-size-small"
            name="time"
            defaultValue={time}
            size="small"
            />
            <TextField
            
            sx={{width:"90%", m:1}}
            label="Name"
            id="outlined-size-small"
            defaultValue={user.displayName}
            size="small"
            name ="patient_name"
            onBlur={handleOnBlur}
            />
            <TextField
            
            sx={{width:"90%", m:1}}
            label="Email"
            id="outlined-size-small"
            defaultValue={user.email}
            size="small"
            name ="patient_email"
            onBlur={handleOnBlur}
            />
            <TextField
            
            sx={{width:"90%", m:1}}
            label="Phone Number"
            id="outlined-size-small"
            defaultValue="Your phone number"
            size="small"
            name ="patient_phone"
            onBlur={handleOnBlur}
            />
            <TextField
            
            sx={{width:"90%", m:1}}
            label="Date"
            id="outlined-size-small"
            name="date"
            defaultValue={date}
            size="small"
            />
            <Button type="submit" variant='contained'>Submit</Button>
            </form>
            
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;