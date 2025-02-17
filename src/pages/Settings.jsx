import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SettingsContent from "../components/SettingsContent";

function Settings() {
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
          <title>Settings - ihute Truck Booking</title>
          <link rel="canonical" href="http://ihute.onrender.com/settings" />
        </Helmet>
        <Sidebar closeSidebar={closeSidebar} />
        <SettingsContent
          showSidebar={showSidebar}
          animateShowSidebar={animateShowSidebar}
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
        />
      </div>
    </HelmetProvider>
  );
}

export default Settings;
