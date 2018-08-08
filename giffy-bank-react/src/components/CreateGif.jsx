import React, { Component } from 'react';
import SearchBar from './SearchBar';
import GifModal from './GifModal';


class CreateGif extends Component {


    render() {
        return (
            <div>
                <h4 className="search-page-header">SEARCH FOR A .GIF BELOW!</h4>
                <SearchBar handleTermChange={this.props.handleTermChange} />
                <GifModal modalIsOpen={this.props.modalIsOpen}
                    selectedGif={this.props.selectedGif}
                    onRequestClose={() => this.props.closeModal()}
                // onRequestClose={() => console.log(this.props)}

                />
            </div>
        );
    }
}

export default CreateGif;