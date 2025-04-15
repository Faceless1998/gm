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
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Gallery /> }/>
        <Route path="/testblock" element={<TestBlock /> }/>
        <Route path="/design" element={<DesignCards /> }/>

      </Routes>
    </Router>
  );
};

export default App;
