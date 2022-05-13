import { Route, Routes, useParams } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import "./App.css";

function App() {
  return (
    
    <div className="App">
      <Header />
      <div>
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
  
<Footer />
    </div>
    </div>
  );
}

export default App;
