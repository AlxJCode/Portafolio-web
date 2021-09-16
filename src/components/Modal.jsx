import React from 'react';

import './Modal.css';

import CloseIcon from '@material-ui/icons/Close';

function Modal({ showModal, setShowModal }) {

    return (
        <>
        {showModal ? (
            <div className="modal_bg">
            <div className="modal_img">
                <img src={showModal.src} alt="" id="modalIMG"/>
                <CloseIcon className="close_icon_img" onClick={() => {setShowModal( prev => !prev)}}/>
            </div>
        </div>) : (
            null
        )}
        </>
    )
}

export default Modal;
