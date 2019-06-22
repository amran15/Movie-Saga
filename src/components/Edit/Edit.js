import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        title: '',
        description: ''
    }
handleClick = () =>{
    console.log(this.state)
    this.props.dispatch({ type: 'EDIT_GENRES', payload: this.state});
}
    handleChange = (PropertyName) => (event) => {
        console.log(this.state.title)
        this.setState({
            [PropertyName]: event.target.value
        })

    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange('title')} value={this.state.title} placeholder='movie title'></input>
                <br />
                <textarea onChange={this.handleChange('description')} value={this.state.description}></textarea>
                <input onClick={this.handleClick} type="submit"></input>
            </div>
        );
    }

}





const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Edit);