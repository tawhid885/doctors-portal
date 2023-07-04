import { Button, Container, Grid, Typography, Alert, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import logImg from "../../../images/login.png";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {loginUser, authError, isLoading, googleLoginHandler} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_url = location.state?.from || "/";
    const local_user = localStorage.getItem("user")
    console.log("user is ", local_user)
    const handleonChange=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(field, value)
    }
    const handleLoginSubmit=e=>{
        loginUser(loginData.email, loginData.password, redirect_url, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn=()=>{
        googleLoginHandler(location, navigate)
    }
    return (
        <>
            {
                !local_user? <Container>
                {
                    !isLoading ? <Grid container spacing={2} sx={{mt:8}}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h4' gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField id="standard-basic" 
                            sx={{width: "75%", m:1}}
                            name="email"
                            onChange={handleonChange}
                            label="Your E-mail" 
                            variant="standard" />
    
                            <TextField id="standard-basic" 
                            sx={{width: "75%", m:1}}
                            type="password"
                            name="password"
                            onChange={handleonChange}
                            label="Password" 
                            variant="standard" />
                            <Button sx={{width:"75%", m:1}} type='submit' variant='contained'>Login</Button>
                        </form>
                        <p>------------------------------</p>
                        <Button style={{display:"block"}} onClick={handleGoogleSignIn} variant='contained'>Google sign in</Button>
                        <Link to="/register">
                            <Button variant='text'>New user? please register</Button>
                        </Link>
                        {!authError && <Alert severity="success">Login successfully !</Alert>}
                    {authError && <Alert severity="error">Something is wrong with login: {authError}</Alert>}
                    </Grid>   
                    <Grid item xs={12} md={6}>
                        <img style={{width: "100%"}} src={logImg} />
                    </Grid>
                </Grid>:
                <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
                }
            </Container>:<Navigate to={redirect_url}/>
            }
        </>
    );
};

export default Login;