import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Homepage />
      </header>
    </div>
  );
}

export default App;
