import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const openSidebar = () => {
    setShowSidebar(true);
    setTimeout(() => {
      setAnimateShowSidebar(true);
    }, 50);
  };
  const closeSidebar = () => {
    setAnimateShowSidebar(false);
    setTimeout(() => {
      setShowSidebar(false);
    }, 100);
  };
  return (
    <div className="flex w-full h-svh bg-white gap-0 relative overflow-hidden">
      <Sidebar closeSidebar={closeSidebar} />
      <DashboardContent showSidebar={showSidebar} animateShowSidebar={animateShowSidebar} openSidebar={openSidebar} closeSidebar={closeSidebar} />
    </div>
  );
}

export default Dashboard;
