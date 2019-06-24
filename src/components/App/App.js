import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details';
import MovieList from '../MovieList/MovieList';
import Edit from '../Edit/Edit';
import Header from '../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div>
      <Header/>
      <Route path="/details" exact component={Details}/>
      <Route path="/" exact component={MovieList}/>
      <Route path="/edit" exact component={Edit}/>
      </div>
      </Router>
    );
  }
}

export default connect() (App);
