import { useState } from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cards from "./pages/Cards";
import Contacts from "./pages/Contacts";

function App() {
  return <>
  <HashRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/wallet" element={<Cards />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </HashRouter>
  </>;
}

export default App;
