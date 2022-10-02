import React from 'react';
import { ImCancelCircle } from "react-icons/im"

const Popup = ({ visible, onClose, imgSrc, title, desc, tech }) => {
    if (!visible) return null;

    return (
        <div className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className='modal-content'>
                <div className='modal-text'>
                    <h1 className='text-3xl pt-4 pb-4'>{title}</h1>
                    <p>{desc}</p>
                    <p className=' text-sky-500'>{tech}</p>

                    <button className='close-modal btn_shadow' onClick={onClose} >
                        <ImCancelCircle size={22} />
                    </button>
                </div>

                <div className='modal-img'>
                    <img className='rounded' src={imgSrc} alt='PROJECT_IMAG' />
                </div>

            </div>
        </div>

    )
}

export default Popup;