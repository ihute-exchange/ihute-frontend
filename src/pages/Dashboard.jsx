import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <div className="flex w-full h-svh bg-white gap-0 relative overflow-hidden">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard</title>
          <link rel="canonical" href="http://ihute.onrender.com/" />
        </Helmet>
        <Sidebar closeSidebar={closeSidebar} />
        <DashboardContent
          showSidebar={showSidebar}
          animateShowSidebar={animateShowSidebar}
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
        />
      </div>
    </HelmetProvider>
  );
}

export default Dashboard;
