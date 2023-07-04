import * as React from 'react';
import {Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import DashAppointments from '../DashAppointments/DashAppointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <Calender date={date} setDate= {setDate}></Calender>
            </Grid>
            <Grid item xs={12} md={7}>
              <DashAppointments date={date}></DashAppointments>
            </Grid>
          </Grid>
    );
};

export default DashboardHome;