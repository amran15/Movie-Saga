import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import DisplayMovies from '../DisplayMovies/DisplayMovies';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>MOVIE SAGA</p>
        <DisplayMovies/>
      </div>
    );
  }
}

export default connect() (App);
