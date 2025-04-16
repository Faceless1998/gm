import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadExternalScripts } from "./utils/loadScripts"; // Adjust path if needed

import Main from "./pages/Main";
import Block from "./pages/Block";
import Plan from "./pages/Plan";
import Apartment from "./pages/Apartment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import TestBlock from "./pages/TestBlock";
import { DesignCards } from "./pages/DesignCards ";
import Layout from "./pages/Layout";
import PlanB from "./pages/PlanB";
import PlanC from "./pages/PlanC";
import PlanA from "./pages/PlanA";
const App = () => {
  useEffect(() => {
    loadExternalScripts();
  }, []);

  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/block" element={<Block />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/plana" element={<PlanA />} />
        <Route path="/planb" element={<PlanB />} />
        <Route path="/planc" element={<PlanC />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Gallery /> }/>
        <Route path="/testblock" element={<TestBlock /> }/>
        <Route path="/design" element={<DesignCards /> }/>
        <Route path="/apartment/:apartmentNumber" element={<Apartment />} /> // ✅

      </Routes>
    </Router>
  );
};

export default App;
