import React, { Component } from 'react';
import SearchBar from './SearchBar';

class CreateGif extends Component {


    render() {
        return (
            <div>
                <h4>Search for a gif!</h4>
                <SearchBar handleTermChange={this.props.handleTermChange} />
            </div>
        );
    }
}

export default CreateGif;