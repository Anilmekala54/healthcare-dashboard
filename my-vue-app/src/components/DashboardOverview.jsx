import "./DashboardOverview.css";

import image from "../assets/human1.png";
import Lungs from "../assets/lungs.png";
import tooth from "../assets/teeth.png";
import bones1 from "../assets/bones1.png";
import activity from "../assets/active.png";

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <div className="dashboard-header">
        <h2 className="dash">Dashboard</h2>
        <p className="week">This Week</p>
      </div>
      <div className="dashboard-cards">

          <img src={image} alt="Dashboard Card" className="dashboard-card" />
 
        <div className="current-appointments-container">
      <div  className="cards-container">
            <div className="lungs-card">
            <img src={Lungs} alt="Dashboard Card" className="lungs" />
            <span>Lungs</span>
          </div>
          <p>Date:26 oct 2021</p>
          <input type="range" min="0" max="100" value="50" className="slider-lungs" />
      </div>
       <div  className="cards-container">
            <div className="lungs-card">
            <img src={tooth} alt="Dashboard Card" className="tooth" />
            <span>Teeth</span>
          </div>
          <p>Date:26 oct 2021</p>
          <input type="range" min="0" max="100" value="50" className="slider-teeth" />
      </div>
       <div  className="cards-container">
            <div className="lungs-card">
            <img src={bones1} alt="Dashboard Card" className="lungs" />
            <span>Bones</span>
          </div>
          <p>Date:26 oct 2021</p>
          <input type="range" min="0" max="100" value="50" className="slider-bones" />
      </div>
            
        </div>
      </div>
      <div className="activity-section-container">
      <div className="activity-header">
          <h2 className="activity-title">Activity</h2>
        <p className="activity-description">3 appointments on this week</p>
      </div>
          <div className="activity-section">
        <img src={activity} alt="Activity" className="activity-image" />
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
