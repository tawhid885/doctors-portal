import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setEmail(value)
    }

    const handleFormSubmit=(e)=>{
        const user = {email}
        fetch("http://localhost:5000/users/admin",{
            method: "PUT",
            headers:{
                'authoraization': `Bearer ${token}`,
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
                console.log("work is done");
                setEmail("");
            }
            // console.log("shakil", data)
        })
        e.preventDefault();
    }
    return (
        <div>
            {success && <Alert>Admin added successfully</Alert>}
            <form onSubmit={handleFormSubmit}>
            <TextField id="standard-basic" 
            type="email"
            name="email"
            onBlur={handleOnBlur}
            label="Email" 
            variant="standard" />
            <Button type="submit" variant='contained'>Submit</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;