import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';


//component to display Movies
//mapping my poster, description and title using MovieItem

class MoviesList extends Component {
    componentDidMount(){
        this.props.dispatch({ type: "GET_MOVIES" });
    } //dispatches an action
    
    render(){
        return(
            <div>
            {this.props.reduxState.movies.map(movie => 
            <MovieItem movie={movie}
            history={this.props.history}
            key={movie.id}/>
            )}
        </div>
        );
    }
}

const mapReduxToState = (reduxState) => ({
   reduxState,
});

export default connect(mapReduxToState)(MoviesList);