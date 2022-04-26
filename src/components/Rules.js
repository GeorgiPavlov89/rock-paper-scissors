import React from 'react'
import { useState } from 'react'
import Modal from "./Modal"

export default function Rules() {
    const [modal, setModal] = useState(false)

    const Toggle = () => setModal(!modal)

    return (
        <div className="rules">
            <button className="rulesBtn" onClick={() => Toggle()}>Rules</button>

            <Modal show={modal} close={Toggle} />
        </div>
    )
}
