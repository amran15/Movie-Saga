import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import DisplayMovies from '../DisplayMovies/DisplayMovies';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div>
      <Route path="/" exact component={DisplayMovies}/>
      <Route path="/edit" exact component={Edit}/>
      <Route path="/details" exact component={Details}/>
      </div>
      </Router>
    );
  }
}

export default connect() (App);
