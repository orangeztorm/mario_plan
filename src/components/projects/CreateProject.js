import React, {Component} from "react";

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
        console.log(this.state);
    };

    render() {
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

export default CreateProject