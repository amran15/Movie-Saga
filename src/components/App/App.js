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
      <div className="App">
        <p>MOVIE SAGA</p>
        <Route path="/" exact component={DisplayMovies}/>
      </div>
      <Route path="/details" exact component={Details}/>
      </Router>
    );
  }
}

export default connect() (App);
