import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';



class Details extends Component {
    handleClick = () => {
        this.props.history.push('/');
    }

    handleEditClick = () => {
        this.props.history.push('/edit');
    }
    render() {
        return (
            <Grid container
                justify="flex-end"
                alignItems="stretch"
                direction="column" >
                <Grid item xs={6}>
                    <img src={this.props.reduxState.movie.poster}
                        alt={this.props.reduxState.movie.title}
                        value={this.props.reduxState.movie.id} />
                    <h3>{this.props.reduxState.movie.title}</h3>
                    <p>{this.props.reduxState.movie.description}</p>
                </Grid>
                <Grid item xs={3}>
                    <button onClick={this.handleClick}>Back to List</button>
                    <button onClick={this.handleEditClick}>Edit</button>
                    <br />
                </Grid>
                <Grid item xs={3}>
                    <br />
                    <ul>
                        {this.props.reduxState.genres.map(genre =>
                            <li key={genre.id}>{genre.name}</li>)}
                    </ul>
                </Grid>
            </Grid>
        );
    }
}

//I mapped through my Genre 

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(Details);