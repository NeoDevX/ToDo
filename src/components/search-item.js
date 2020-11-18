import React, { Component } from 'react';

export default class Search extends Component {

    state = {
        word: ''
    };

    onSearchChange = (event) => {
        const word = event.target.value.trim();
        this.setState({ word });
        this.props.onSearchChange(word);
    }

    render() {
        return <input className="search" 
                placeholder="type to search"
                value={ this.state.word }
                onChange={ this.onSearchChange }/>
    }
};
