import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Footer from "./Components/Footer";

function App() {
  const contentStyle = {
    marginTop: "80px",
    padding: "20px",
  };

  return (
    <>
      <Navbar />
      <div style={contentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
