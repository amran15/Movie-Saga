import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';


class MovieItem extends Component {
  
    render(){
        return(
            <Paper>
           <div>
            <p>{this.props.movie.description}</p>
          
       <h2> {this.props.movie.title}</h2>
        <img
        src={this.props.movie.poster}
        alt={this.props.movie.title}/>
        </div>
        </Paper>
          );
    }
}

export default connect() (MovieItem);