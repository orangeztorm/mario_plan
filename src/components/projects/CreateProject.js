import React, {Component} from "react";
import {connect} from 'react-redux';
import { createProject } from "../../store/actions/projectActions";
import {Redirect} from "react-router-dom";

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    };

    _handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value,
        });
    };
    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    };

    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>;
        return (
            <div className="container">
                <form onSubmit={this._handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Create Project
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' onChange={this._handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content"  onChange={this._handleChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1z-depth-0">Create Project</button>
                    </div>
                </form>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const matchDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(CreateProject)