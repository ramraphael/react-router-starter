import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <>
      <h1>Hello Universe!</h1>
      <Router>
        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/about">About Page</Link></li>
        </ul>                
        <Route exact path="/" component={Home}/>
        <Route exact path = "/about" component={About}/>
      </Router>
    </>
  );
};
