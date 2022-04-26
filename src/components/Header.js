import React from 'react'

export default function Header({ score }) {
    return (
        <div className="header">
            <img src={require('../images/logo.svg').default} alt="logo" className="logo" />
            <div className="score">
                <div className="score__title">score</div>
                <div className="score__number">{score}</div>
            </div>
        </div>
    )
}
