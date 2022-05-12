import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import "./App.css";
import Donuts from './components/DonutsMethane';
import  {Ble}  from './BDD/DataBle';
import {Lin} from './BDD/DataLin';
import { useState } from 'react';

function App() {
  const [cereales,setCereales]=useState(Lin);
  return (
    <div className="App">
      <Header />
      <header className="App-header">
      </header>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
        <button type='button' onClick={() => setCereales(Ble)}> Lin </button>
      </div>
    <div className="graph-box">
      <div className="graph" style={{width: 300}}>
    <Donuts Database={cereales}/>
      </div>
    <div className="graph" style={{width: 300}}>
    <Donuts Database={cereales}/>
    </div>
    <div className="graph" style={{width: 300}}>
    <Donuts Database={cereales}/>
    </div>
    </div>
    <div className="App">
    </div>
  
<Footer />
    </div>
  );
}

export default App;
