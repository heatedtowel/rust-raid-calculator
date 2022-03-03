import './App.css';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/calculator">
              <Calculator />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
