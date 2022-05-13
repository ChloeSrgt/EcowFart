import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    
    <div className="App">
      <Header />
      <div>
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  
<Footer />
    </div>
    </div>
  );
}

export default App;
