import "./UpcomingShedule.css";
import injection from "../../../src/assets/injection.png";
import eye from "../../../src/assets/eye.jpg";
import heart from "../../../src/assets/heart.png";
import brain from "../../../src/assets/brain.png";

function UpcommingShedule() {
  return (
    <div>
      <div className="upcoming-schedule">
        <h3>The Upcoming Schedule</h3>

        <div className="schedule-day">
          <h4>On Thursday</h4>
          <div className="appointment-dates">
            <div className="appointment2">
              <strong>
                Health checkup complete <br></br>
                <span>11:00 AM</span>
              </strong>
              <img src={injection} alt="injection" className="injection" />
            </div>
              <div className="appointment-dates">
            <div className="appointment2">
              <strong>
                Ophthalmologist <br></br> <span>14:00 PM</span>
              </strong>
                   <img src={eye} alt="eye" className="eye" />
            </div>
            </div>
          </div>
        </div>

        <div className="schedule-day">
          <h4>On Saturday</h4>
          <div className="appointment-dates">
          <div className="appointment2">
            <strong>
              Cardiologist <br></br> <span>12:00 AM</span>
            </strong>
             <img src={heart} alt="injection" className="heart-icon" />
          </div>
          <div className="appointment2">
            <strong>
              Neurologist <br></br> <span>16:00 PM</span>
            </strong>
              <img src={brain} alt="injection" className="heart-icon" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcommingShedule;
