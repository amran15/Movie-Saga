import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';



class MovieItem extends Component {

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={5}>
                    <Link to="/Details">
                        <img
                            src={this.props.movie.poster}
                            alt={this.props.movie.title} />
                    </Link>
                </Grid>
                <Grid item xs={5}>
                <h2> {this.props.movie.title}</h2>
                    <p>{this.props.movie.description}</p>
                </Grid>
            </Grid>
        );
    }
}

export default connect()(MovieItem);