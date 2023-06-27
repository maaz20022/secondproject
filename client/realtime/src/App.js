import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
//import './Css/Home.css';
import { Switch, Route } from 'react-router-dom';
import './Components/Login';
import './Components/Logout';
import './Components/Register';
import './Components/Contact';
import Register from './Components/Register';
function App() {
  return (
    <><Navbar />
      <Switch>
        <Route exact="/" component={Home}></Route>
        <Route exact="/about" component={About}></Route>
        <Route exact="/Register" component={Register}></Route>

      </Switch>
    </>

  );
}

export default App;
