import React, { Component } from 'react';

export default class AddInput extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        const targetVal = event.target.value.trim();
        this.setState({
            label: targetVal
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {  
        return (
            <form className="itme-add-form input-group"
                onSubmit={ this.onSubmit }>
                <input type="text" 
                    className="form-control" 
                    placeholder="New task"
                    onChange={ this.onLabelChange }
                    value={this.state.label}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" 
                        type="button" 
                        id="button-addon2"
                        onClick={ this.onSubmit }>
                        Add Item
                    </button>
                </div>
            </form>
        );
    }
}
