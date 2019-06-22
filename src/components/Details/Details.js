import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {
    handleBackClick = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleBackClick}>Back to List</button>
                <button onClick={this.handleEditClick}>Edit</button>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    feedback: reduxState
})
export default connect(mapReduxStateToProps)(Details);