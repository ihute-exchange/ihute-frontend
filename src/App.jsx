import { useState } from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return <>
  <HashRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </HashRouter>
  </>;
}

export default App;
