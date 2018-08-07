import React, { Component } from 'react';
import SearchBar from './SearchBar';

class CreateGif extends Component {


    render() {
        return (
            <div>
                <SearchBar handleFormChange={this.props.handleFormChange} gifSearch={this.props.gifSearch} />
                <h4>This is Create A Gif Page</h4>
            </div>
        );
    }
}

export default CreateGif;