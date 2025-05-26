import React from 'react';
import './CalenderSection.css';

function CalendarSection() {
  return (
    <div className="calendar-section">
      <h3>October 2021</h3>
      <div className="calendar-grid">
     
        <div className="calendar-row header">
          {['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div 
              key={day} 
              className={`calendar-cell ${day === 'Tue' ? 'tuesday-header' : ''}`}
            >
              {day}
            </div>
          ))}
        </div>
        
        <div className="calendar-row">
          {[25, 26, 27, 28, 29, 30, 31].map((date, index) => (
            <div 
              key={date} 
              className={`calendar-cell date ${index === 1 ? 'tuesday-cell' : ''}`}
            >
              {date}
            </div>
          ))}
        </div>
        
        {[
          ['10:00', '08:00', '12:00', '10:00', '—', '12:00', '09:00'],
          ['11:00', '09:00', '—', '14:00', '14:00', '14:00', '10:00'],
          ['12:00', '10:00', '13:00', '—', '16:00', '15:00', '11:00']
        ].map((times, rowIndex) => (
          <div key={rowIndex} className="calendar-row">
            {times.map((time, colIndex) => (
              <div 
                key={colIndex} 
                className={`calendar-cell time ${colIndex === 1 ? 'tuesday-cell' : ''}`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarSection;
