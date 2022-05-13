import Donuts from '../components/DonutsMethane';
import {Mootral} from '../BDD/DataMootral';
import React from 'react';
import { useState } from 'react';
import { Huile } from "../BDD/DataHuile";
import { Algue } from "../BDD/DataAlgue";
import { Levure } from "../BDD/DataLevure";
import { Ail } from "../BDD/DataAil";
import DonutsMilk from './DonutsMilk';
import DonutsPrice from './DonutsPrice';
import ail from "../assets/ail.jpg";
import mootral from "../assets/mootral.jpg";
import levure from "../assets/levure.jpeg";
import algue from "../assets/algue.jpeg";
import huile from "../assets/vegetale.jpeg"
import "../styles/Simulateur.css"
import swal from "sweetalert";

export default function Simulateur () {
    const [cereales,setCereales]=useState([]);
    console.log(Mootral)
    return (
    <div className='Simulateur'>
        <div className='SimulateurImage'>
   <div> 
     <button type='button' onClick={() => setCereales(Mootral)}> <img src={mootral} alt="mootral"/> </button>
   </div>
    <button type='button' onClick={() => swal({
      title: "Mootral",
      text: Mootral[0].information,
      icon: mootral,
      className: "carteCereale",
    })}>Mootral</button>
        <button type='button' onClick={() => setCereales(Levure)}> <img src={levure} alt="levure"/>  </button>
        <button type='button' onClick={() => swal({
      title: "Levure",
      text: Levure[0].information,
      icon: levure,
      className: "carteCereale",
    })}>Levure</button>
        <button type='button' onClick={() => setCereales(Algue)}> <img src={algue} alt="algue"/>  </button>
        <button type='button' onClick={() => swal({
      title: "Algue",
      text: Algue[0].information,
      icon: algue,
      className: "carteCereale",
    })}>Algue</button>
        <button type='button' onClick={() => setCereales(Huile)}> <img src={huile} alt="huile"/>  </button>
        <button type='button' onClick={() => swal({
      title: "Huile",
      text: Huile[0].information,
      icon: huile,
      className: "carteCereale",
    })}>Huile</button>
        <button type='button' onClick={() => setCereales(Ail)}> <img src={ail} alt="ail"/> </button>
        <button type='button' onClick={() => swal({
      title: "Ail",
      text: Ail[0].information,
      icon: ail,
      className: "carteCereale",
    })}>Ail</button>
        </div>

    <div className="graph-box">
      <div className="graph" style={{width: 300}}>
    <Donuts Database={cereales}/>
      </div>
    <div className="graph" style={{width: 300}}>
    <DonutsMilk Database={cereales}/>
    </div>
    <div className="graph" style={{width: 300}}>
    <DonutsPrice Database={cereales}/>
    </div>

    </div>
    </div>
    )
}