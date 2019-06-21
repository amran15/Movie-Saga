import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';


//component to display Movies

class MoviesList extends Component {
    componentDidMount(){
        this.props.dispatch({ type: "GET_MOVIES" });
    }
    
    render(){
        return(
            <div>
            {this.props.reduxState.movies.map(movie => 
            <MovieItem movie={movie} key={movie.id}/>
            )}
        </div>
        );
    }
}

const mapReduxToState = (reduxState) => ({
    reduxState: reduxState,
});

export default connect(mapReduxToState)(MoviesList);