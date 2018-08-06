import React from 'react';


const Gifs = (props) => {
    const gifList = props.gifs.map((gif, i) => {
        console.log(gif, ' gif id')
        return (
            <li key={gif.id}>
                <h1>{gif.title}</h1><br />
                <small>{gif.description}</small><br />
                <button onClick={props.deleteGif.bind(null, gif._id)}>Delete</button>
                <button onClick={props.showModal.bind(null, gif._id)}>Edit</button>
            </li>)
    })

    return (
        <ul>
            {gifList}
        </ul>
    )

};


export default Gifs;