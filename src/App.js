import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Link } from 'react-router-dom';

const App = () => { 
  return (
  <div>
    < Route exact path='/Home' component={Home}></Route>
    < Route path='/About' component={About}></Route>
    < Route path='/Contact' component={Contact}></Route>
    

      
    < Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Contact">Contact</Link>
  
    </div >
  )  
};

export default App;
