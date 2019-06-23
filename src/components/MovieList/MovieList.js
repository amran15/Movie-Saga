import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import IndividualMovie from '../IndividualMovie/IndividualMovie';


//component to display Movies
//mapping my poster, description and title using IndividualMovie

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
            {/* <pre>
            {JSON.stringify(this.props.reduxState, null, 2)}
            </pre> */}
        </div>
        );
    }
}

const mapReduxToState = (reduxState) => ({
   reduxState
});

export default withRouter (connect(mapReduxToState)(MovieList));