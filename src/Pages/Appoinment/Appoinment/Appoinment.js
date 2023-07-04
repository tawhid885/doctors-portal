import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    console.log(`date is ${date.toDateString()}`)
    return (
        <div>
            <Navigation></Navigation>
            <h3>this is appooitment page</h3>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>
        </div>
    );
};

export default Appoinment;