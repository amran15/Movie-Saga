import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';


//brought in Grid to display my movie poster/title and description in a nice format



class MovieItem extends Component {
    handleClick = () => {
        this.props.dispatch({ type: 'GET_DETAILS', payload: this.props.movie });
        this.props.history.push('/details');
    }

    render() {
        return (
            <Grid container 
            direction="row"
            justify="center">
                <Grid item xs={6}>
                    <img
                        src={this.props.movie.poster}
                        onClick={this.handleClick}
                        alt={this.props.movie.title} />
                </Grid>
                <Grid item xs={3}>
                    <h2> {this.props.movie.title}</h2>
                    <p>{this.props.movie.description}</p>
                </Grid>
            </Grid>
        );
    }
}
const mapReduxToState = (reduxState) => ({
    reduxState: reduxState,
});

export default connect(mapReduxToState)(MovieItem);