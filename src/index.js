import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';
ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));
