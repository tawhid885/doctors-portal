import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DashAppointments = ({date}) => {
    const {user} = useAuth();
    const [appoinments, setAppointments] = useState([]);
    // console.log(user.email)

    useEffect(()=>{
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setAppointments(data))
    },[date])
    return (
        <div>
            <h3>appoinments {appoinments.length}</h3>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dashboard table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Name</TableCell>
            {/* <TableCell align="right">E-mail</TableCell> */}
            {/* <TableCell align="right">Date</TableCell> */}
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appoinments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.patient_name}</TableCell>
              {/* <TableCell align="right">{row.patient_email}</TableCell>
              <TableCell align="right">{row.patient_phone}</TableCell>
              <TableCell align="right">{row.date}</TableCell> */}
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default DashAppointments;