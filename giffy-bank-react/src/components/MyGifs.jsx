import React from 'react';

const MyGifs = (props) => {
    console.log(props);
    const gifsList = props.gifs.map((gif) => {
        return (
            <div>
                <img src={gif.url} />
                <h3>{gif.description}</h3>
            </div>
        )
    })
    return (
        <div>
            <h1>This is MyGifs Page</h1>
            {gifsList}
        </div>
    );
}

export default MyGifs;

