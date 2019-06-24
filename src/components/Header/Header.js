import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
    render(){
        return (
            <header>
            <h2>MOVIE SAGA WEEKEND</h2>
            </header>
        )
    }
}


export default connect() (Header);