import React from 'react';
import './currentAppointments.css';
import tooth from "../../../src/assets/teeth.png"; 
import muscle from "../../../src/assets/muscle.png"; 

function CurrentAppointments() {
  return (
    <div>
       <div className="current-appointments1">
      <div className="appointment">
       <div className='dent-container'>
         <h4>Dentist </h4>
        <img src={tooth} alt="Dentist Icon" className='dentist' />
       </div>
        <p>09:00-11:00</p>
        <p className="doctor">Dr. Cameron Williamson</p>
      </div>
      <div className="appointment1">
        <div className='dent-container'>
          <h4>Physiotherapy Appointment</h4>
        <img src={muscle} alt="Dentist Icon" className='muscle' />
       </div>
    
        <p>11:00-12:00</p>
        <p className="doctor">Dr. Kevin Djones</p>
      </div>
    </div>
    </div>
  )
}

export default CurrentAppointments
