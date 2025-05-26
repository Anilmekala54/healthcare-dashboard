import React, { useState } from 'react';
import { Settings, LayoutDashboard, MessageSquare, CalendarDays, ArrowDownUp, ChartSpline, Phone, Menu, X } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="nav-section">
          <div className="nav-title">General</div>
          <div className="nav-item active">
            <span className="nav-icon"> <LayoutDashboard /></span>
            <span>Dashboard</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon"> <ArrowDownUp /></span>
            <span>History</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon"> <CalendarDays /></span>
            <span>Calendar</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon"><CalendarDays /></span>
            <span>Appointments</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon"> <ChartSpline /></span>
            <span>Statistics</span>
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-title">Tools</div>
          <div className="nav-item"></div>
        </div>

        <div className="nav-section">
          <div className="nav-title">Tools</div>
          <div className="nav-item">
            <span className="nav-icon"> <MessageSquare /></span>
            <span>Chat</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon"><Phone /></span>
            <span>Support</span>
          </div>
        </div>

        <div className="setting-section">
          <div className="nav-item">
            <span className="nav-icon"> <Settings /></span>
            <span>Setting</span>
          </div>
        </div>
      </div>
    </>
  );
}
