import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edit extends Component {
    state = {
        title: '',
        description: ''
    }
//submit edit function
submitEdit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'EDIT_MOVIE', payload:{ ...this.state, id:this.props.reduxState.movie.id} });
        this.props.history.push('/');
    }
//cancel edit function  
    handleCancelClick = () => {
        this.props.history.push('/details');

     }

    handleChange = (PropertyName) => (event) => {
        this.setState({
            [PropertyName]: event.target.value
        })

    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange('title')} value={this.state.title} placeholder='movie title'></input>
                <br />
                <textarea onChange={this.handleChange('description')} value={this.state.description}
                rows="10" cols="100" />
                <br/>
                <button onClick={this.submitEdit}>Save</button>
                <br/>
               <button onClick={this.handleCancelClick}>Cancel</button>
            
                <pre>{JSON.stringify(this.props.reduxState.movie, null, 2)}</pre>
            </div>
        );
    }

}





const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Edit);