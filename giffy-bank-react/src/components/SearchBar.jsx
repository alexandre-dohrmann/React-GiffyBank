import React from 'react';

const SearchBar = (props) => {

    return (
        <div className="search m-2">
            <input type="text" name="search" onChange={props.handleTermChange} />
        </div>
    );
}

export default SearchBar;