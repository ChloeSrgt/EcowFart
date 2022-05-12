import Donuts from '../components/DonutsMethane';
import {Mootral} from '../BDD/DataMootral';
import { useState } from 'react';
import { Huile } from "../BDD/DataHuile";
import { Algue } from "../BDD/DataAlgue";
import { Levure } from "../BDD/DataLevure";
import { Ail } from "../BDD/DataAil";
import DonutsMilk from './DonutsMilk';
import DonutsPrice from './DonutsPrice';

export default function Simulateur () {
    const [cereales,setCereales]=useState([]);

    return (
    <div className='Simulateur'>
        
    <button type='button' onClick={() => setCereales(Mootral)}> Mootral </button>
        <button type='button' onClick={() => setCereales(Levure)}> Levure </button>
        <button type='button' onClick={() => setCereales(Algue)}> Algue Rouge </button>
        <button type='button' onClick={() => setCereales(Huile)}> Huile Vegetale </button>
        <button type='button' onClick={() => setCereales(Ail)}> Ail </button>

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