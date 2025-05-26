import React from "react";
import {
  Bell,
  Search,
  User,
  Plus,
 
} from "lucide-react";
import "./Navbar.css";

function navLinks() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-section">
            <h1 className="logo">
              Health<span className="logo-highlight">care.</span>
            </h1>
          </div>
          <div className="nav-links">
            <div className="search-bar">
             
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button className="notification-btn">
                <Bell className="icon-md" />
              </button>
            </div>
            <div className="actions-section">
                    <button className="profile-btn">
                        <User className="icon-sm" />
                    </button>
                    <button className="add-btn">
                        <Plus className="icon-sm" />
                    </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navLinks;
