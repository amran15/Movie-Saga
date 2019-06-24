import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import IndividualMovie from '../IndividualMovie/IndividualMovie';



//mapped my poster, description and title using IndividualMovie component

class MovieList extends Component {
    componentDidMount(){
        this.props.dispatch({ type: "GET_MOVIES" });
    } //dispatches an action
    
    render(){
        return(
            <div>
            {this.props.reduxState.movies.map(movie => 
            <IndividualMovie movie={movie}
            history={this.props.history}
            key={movie.id}/>
            )}
        </div>
        );
    }
}

const mapReduxToState = (reduxState) => ({
   reduxState
});

export default withRouter (connect(mapReduxToState)(MovieList));