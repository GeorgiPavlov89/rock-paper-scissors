import React from 'react'
import closeIcon from "../images/icon-close.svg"
import rules from '../images/image-rules.svg'
export default function Modal({ show, close }) {
    return (
        <>
            {
                show ?
                    <div className="modalContainer">
                        <div className="modal-box">
                            <div className="modal__header">
                                <h1>Rules</h1>
                                <button className="close" onClick={() => close()}>
                                    <img src={closeIcon} alt="Close" />
                                </button>
                            </div>
                            <img src={rules} alt="Rules" />
                        </div>
                    </div>
                    : null
            }
        </>
    )
}
