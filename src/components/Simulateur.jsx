import Donuts from '../components/DonutsMethane';
import {Mootral} from '../BDD/DataMootral';
import { useState } from 'react';
import { Huile } from "../BDD/DataHuile";
import { Algue } from "../BDD/DataAlgue";
import { Levure } from "../BDD/DataLevure";
import { Ail } from "../BDD/DataAil";
import DonutsMilk from './DonutsMilk';
import DonutsPrice from './DonutsPrice';
import lin from "../assets/lin.jpeg";
import ail from "../assets/ail.jpg";
import levure from "../assets/levure.jpeg";
import algue from "../assets/algue.jpeg";
import huile from "../assets/vegetale.jpeg"
import "../styles/Simulateur.css"

export default function Simulateur () {
    const [cereales,setCereales]=useState([]);

    return (
    <div className='Simulateur'>
        <div className='SimulateurImage'>
    <button type='button' onClick={() => setCereales(Mootral)}> <img src={lin} alt="mootral"/> </button>
        <button type='button' onClick={() => setCereales(Levure)}> <img src={levure} alt="levure"/>  </button>
        <button type='button' onClick={() => setCereales(Algue)}> <img src={algue} alt="algue"/>  </button>
        <button type='button' onClick={() => setCereales(Huile)}> <img src={huile} alt="huile"/>  </button>
        <button type='button' onClick={() => setCereales(Ail)}> <img src={ail} alt="ail"/> </button>
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