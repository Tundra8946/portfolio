import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children, size }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.3s ease-in-out' }}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                className={`relative bg-gray-800 text-white rounded-lg shadow-lg p-6 transition-transform transform ${size} ${isOpen ? 'scale-100' : 'scale-95'}`}
                style={{ transition: 'transform 0.3s ease-in-out' }}
            >
                <button
                    className="absolute top-4 right-4 text-2xl font-bold text-gray-300 hover:text-gray-100 transition duration-300 ease-in-out"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div id="modal-title" className="text-xl font-semibold mb-4">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
