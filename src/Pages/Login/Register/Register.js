import { Button, Container, Grid, TextField, Typography, Box,Alert } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import logImg from "../../../images/login.png";
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {isLoading,authError, registerUser}= useAuth();
    const navigate = useNavigate();
    const handleonBlur=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(field, value)
    }
    const handleLoginSubmit=e=>{
        if(loginData.passwrod != loginData.passwrod2){
            alert("your password didn't match");
            return  
        }
        registerUser(loginData.email, loginData.password, navigate, loginData.name);
        e.preventDefault();
    }
    return (
        <Container>
            {
                isLoading? <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>:
              <Grid container spacing={2} sx={{mt:8}}>
              <Grid item xs={12} md={6}>
                  <Typography variant='h4' gutterBottom>
                      Register
                  </Typography>
                  <form onSubmit={handleLoginSubmit}>
                      <TextField id="standard-basic" 
                      sx={{width: "75%", m:1}}
                      name="name"
                      type="text"
                      onBlur={handleonBlur}
                      label="Your Name" 
                      variant="standard" />
                      <TextField id="standard-basic" 
                      sx={{width: "75%", m:1}}
                      name="email"
                      type="email"
                      onBlur={handleonBlur}
                      label="Your E-mail" 
                      variant="standard" />

                      <TextField id="standard-basic" 
                      sx={{width: "75%", m:1}}
                      type="password"
                      name="password"
                      onBlur={handleonBlur}
                      label="Password" 
                      variant="standard" />
                      <TextField id="standard-basic" 
                      sx={{width: "75%", m:1}}
                      type="password"
                      name="password2"
                      onBlur={handleonBlur}
                      label="Confirm your password" 
                      variant="standard" />
                      <Button sx={{width:"75%", m:1}} type='submit' variant='contained'>Register</Button>
                  </form>
                  <Link to="/login">
                          <Button variant='text'>Already have an account? please sign in.</Button>
                      </Link>
                      {!authError && <Alert severity="success">Created successfully !</Alert>}
                      {authError && <Alert severity="error">Something is wrong : {authError}</Alert>}
              </Grid>
              <Grid item xs={12} md={6}>
                  <img style={{width: "100%"}} src={logImg} />
              </Grid>
          </Grid>

            }
            
        </Container>
    );
};

export default Register;