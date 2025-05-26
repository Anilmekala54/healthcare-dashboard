import React from 'react';
import './StaticData.css';
import CalenderSection from './CalenderSection/CalenderSection';
import CurrentAppointmentSection from './CurrentAppointments/CurrentAppointments';
import UpcomingShedule from './UpcomingShedule/UpcommingShedule';

function StaticData() {
  return (
    <div className='static-data-container'>
        <CalenderSection />
        <CurrentAppointmentSection />
        <UpcomingShedule />

    </div>
  )
}

export default StaticData
