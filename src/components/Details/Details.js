import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {
    componentDidMount(){
        this.props.dispatch({ type: "GET_GENRES" });
    } //dispatches an action

    render() {
        return (
            // <div>{this.props.reduxState.genres}</div>
            <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    feedback: reduxState
})
export default connect(mapReduxStateToProps)(Details);