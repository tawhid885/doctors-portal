import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const Calender = (props) => {
    const date = props.date;
    const setDate = props.setDate
    console.log(typeof setDate)
    console.log("Date is", props.date)
    return (
       <div> 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
       <StaticDatePicker
    displayStaticWrapperAs="desktop"
    // orientation='landscape'
    onChange={(newValue) => {
      // console.log("calen", newValue.$d.toDateString())
      setDate(newValue.$d);
      // console.log("d ", date.toDateString())
    }}
  />
    </LocalizationProvider>
    </div>
    );
};

export default Calender;