import { useState } from 'react'

import './App.css';
import { Search, Bell, User, Plus } from "lucide-react";
import NavLinks from './components/NavLinks';
import Sidebar from './components/Sidebar';
import DashboardOverview from './components/DashboardOverview';
import StaticData from './components/StaticData';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
   <NavLinks/>
  <div className="main-container">
     <Sidebar/>
   <DashboardOverview/>
   <StaticData/>
  </div>
   </div>
  )
}

export default App
