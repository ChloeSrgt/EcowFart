import { Route, Routes } from "react-router-dom";
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
    
      <header className="App-header">
      <Header />
      </header>
      <div>
        <p>Salut ça farte ?!</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search/:idProduct" element={<Detail />} />
      </Routes>  
      </div>
      <div>
      </div>
  
<Footer />
    </div>
  );
}

export default App;
