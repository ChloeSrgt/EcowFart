import './App.css';
import Donuts from './components/DonutsMethane';
import  {Ble}  from './BDD/DataBle';
import {Lin} from './BDD/DataLin';
import { useState } from 'react';

function App() {
  const [cereales,setCereales]=useState(Lin);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <img alt="logo" src={'src/assets/Logo-rond.png'} />
        <p>Salut ça farte ?!</p>
        <button type='button' onClick={() => setCereales(Ble)}> Lin </button>
        
      </div>
      <div style={{width: 300}}>
    <Donuts Database={cereales}/>
    <Donuts Database={cereales}/>
      </div>
    </div>
  );
}

export default App;
