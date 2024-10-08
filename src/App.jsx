import { useState } from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";

function App() {
  return <>
  <HashRouter>
    <Routes>
      <Route path="/" element={<Overview />} />
    </Routes>
  </HashRouter>
  </>;
}

export default App;
