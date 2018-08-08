import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
    if (!props.selectedGif) {
        return <div></div>;
    }
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={() => props.onRequestClose()}>
            <div className="gif-modal">
                <button className="btn btn-info log2" onClick={() => props.onRequestClose()}>Add to "My Gifs"</button><br />
                <img className="gif-modal-img" alt="modal-here" src={props.selectedGif.images.original.url} />
                <p><strong>Title:<br /></strong> {props.selectedGif.title}</p>
                <p><strong>Source (url):<br /></strong> <a href={props.selectedGif.url}>{props.selectedGif.source}</a></p><br /><br />

                <button className="btn btn-info log" onClick={() => props.onRequestClose()}>Close</button>
            </div>
        </Modal>
    );
};

export default GifModal;