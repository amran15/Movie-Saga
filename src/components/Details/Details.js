import React, { Component } from 'react';
import { connect } from 'react-redux';



class Details extends Component {
    handleClick = () => {
        this.props.history.push('/');
    }

    handleEditClick = () => {
        this.props.history.push('/edit');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Back to List</button>
                <button onClick={this.handleEditClick}>Edit</button>
                <br/>
                <img src={this.props.reduxState.movie.poster}
                    alt={this.props.reduxState.movie.title}
                    value={this.props.reduxState.movie.id} />
                    <h3>{this.props.reduxState.movie.title}</h3>
                    <p>{this.props.reduxState.movie.description}</p>
                    <br/>
                    <ul> {this.props.reduxState.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}</ul>
            </div>
        );
    }
}

//I mapped through my Genre 

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(Details);