import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    return (
        <div className=''>
            <DayPicker className='p-20' />
        </div>
    );
};

export default Calendar;