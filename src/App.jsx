import { useState } from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cards from "./pages/Cards";
import Contacts from "./pages/Contacts";
import History from "./pages/History";
import Notifications from './pages/Notifications'

function App() {
  return <>
  <HashRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/wallet" element={<Cards />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/history" element={<History />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  </HashRouter>
  </>;
}

export default App;
