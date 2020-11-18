import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Jacket from './components/Jacket';
import Shirt from './components/Shirt';
import Accessory from './components/Accessory';
import InStock from './components/InStock';
import Home from './components/Home';

const App = () => {
  
return(
    <Router>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/jacket"><div  className="container"><Jacket/></div></Route>
      <Route exact path="/shirt"><div  className="container"><Shirt/></div></Route>
      <Route exact path="/accessory" > <div  className="container"><Accessory/></div> </Route>
      <Route exact path="/:manu/:id"><div className="container1"><InStock/></div></Route>
 


    </Switch>
    </Router>);}

export default App;
