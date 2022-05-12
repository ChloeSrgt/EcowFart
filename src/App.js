import './App.css';
import CompteurGaz from './components/CompteurGaz';
import TempsPasse from "./components/TempsPasse";
import "./styles/compteurGaz.css";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="container">
        <button className='compteurGaz'><CompteurGaz /></button>
        <div className="blocText">
          <TempsPasse />
        </div>
      </div>
      <p>Salut ça farte ?!</p>
    </div>
  );
}

export default App;
