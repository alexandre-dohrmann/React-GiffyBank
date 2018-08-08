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
            <div>
                <img src={props.selectedGif.images.original.url} />
                <p><strong>Title:</strong> {props.selectedGif.title}</p>
                <p><strong>Source (url):</strong> <a href={props.selectedGif.url}>{props.selectedGif.source}</a></p>

                <button onClick={() => props.onRequestClose()}>close</button>
            </div>
        </Modal>
    );
};

export default GifModal;