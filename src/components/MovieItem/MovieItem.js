import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieItem extends Component {
  
    render(){
        return(
           <div>
            <p>{this.props.movie.title}</p>
            <p>{this.props.movie.description}</p>
       
        <img
        src={this.props.movie.poster}
        alt={this.props.movie.title}/>
        </div>
          );
    }
}

export default connect() (MovieItem);