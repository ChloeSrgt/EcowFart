import './App.css';
import CompteurGaz from './components/CompteurGaz';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <CompteurGaz />
        <p>Salut ça farte ?!</p>
      </div>
    </div>
  );
}

export default App;
