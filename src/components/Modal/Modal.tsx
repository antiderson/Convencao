import React from 'react';
import './Modal.css'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: string | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image }) => {
    if (!isOpen || !image) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={image}/>
            </div>
        </div>
    );
};

export default Modal;