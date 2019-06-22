import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details';
import DisplayMovies from '../DisplayMovies/DisplayMovies';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div>
      <Route path="/details" exact component={Details}/>
      <Route path="/" exact component={DisplayMovies}/>
      <Route path="/edit" exact component={Edit}/>
      </div>
      </Router>
    );
  }
}

export default connect() (App);
