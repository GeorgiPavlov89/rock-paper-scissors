import React from 'react'
import { Link } from "react-router-dom"


export default function Play({ setMyChoice }) {

    const setChoise = (e) => {
        setMyChoice(e.target.dataset.choice);


    }

    return (
        <div className="play">
            <Link to="/game"  >
                <div className="choice paper choice-btn " data-choice="paper" onClick={setChoise}>
                </div>
            </Link>
            <Link to="/game" >
                <div className="choice scissors choice-btn" data-choice="scissors" onClick={setChoise}>
                </div>
            </Link>
            <Link to="/game" className="choice-btn" data-choice="rock" >
                <div className="choice rock choice-btn" data-choice="rock" onClick={setChoise}>
                </div>
            </Link >
        </div >
    )
}
