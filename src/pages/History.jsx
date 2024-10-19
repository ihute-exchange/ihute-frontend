import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HistoryContent from "../components/HistoryContent";
import { Helmet } from "react-helmet";

function History() {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>History</title>
        <link rel="canonical" href="http://ihute.onrender.com/" />
      </Helmet>
      <Sidebar closeSidebar={closeSidebar} />
      <HistoryContent
        showSidebar={showSidebar}
        animateShowSidebar={animateShowSidebar}
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
      />
    </div>
  );
}

export default History;
