import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {
    handleBackClick = () => {
        this.props.history.push('/');
    }
    handleEditClick = () => {
        this.props.history.push('/edit');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleBackClick}>Back to List</button>
                <button onClick={this.handleEditClick}>Edit</button>
                <br/>
                <img src={this.props.reduxState.movies.poster}
                    alt={this.props.reduxState.movies.title}
                    value={this.props.reduxState.movies.id} />
                    <h3>{this.props.reduxState.movies.title}</h3>
                    <p>{this.props.reduxState.movies.description}</p>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(Details);