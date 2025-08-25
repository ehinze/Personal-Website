import React from "react";
import Aboutme from "./Pages/Aboutme";
import All from './Pages/All';
import { Routes, Route } from "react-router-dom";
import Workexperience from './Pages/Workexperience'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/About" element={<Aboutme />} />
      <Route path="/Work" element={<Workexperience />} />

    </Routes>

  )
}

export default App
