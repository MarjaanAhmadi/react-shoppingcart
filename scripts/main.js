import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router , Route  , hashHistory } from 'react-router';
import { createHistory } from 'history'

import App from './app/App';
import About from './app/About';
import Contact from './app/Contact';


const routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Router>
);



ReactDOM.render(routes ,  document.getElementById('app'));
