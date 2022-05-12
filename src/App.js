import './App.css';
import Donuts from './components/DonutsMethane';
import  {Ble}  from './BDD/DataBle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <img alt="logo" src={'src/assets/Logo-rond.png'} />
        <p>Salut ça farte ?!</p>
      </div>
      <div style={{width: 300}}>
    <Donuts Database={Ble}/>
      </div>
    </div>
  );
}

export default App;
