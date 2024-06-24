import "./styles.css";
import React from "react";
import About from "./About";
import Home from "./Home";
import Menu from "./Menu";
import Reserve from "./Reserve";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
