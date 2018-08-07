import React from 'react';

const SearchBar = (props) => {

    return (
        <div className="search">
            <input type="text" name="search" onChange={props.handleFormChange} value={props.gifSearch.search} />
        </div>
    );
}

export default SearchBar;