import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Game({ score, myChoice, setScore }) {

    const [house, setHouse] = useState("");
    const [playerWin, setPlayerWin] = useState("")
    const [counter, setCounter] = useState(3)

    const newHousePick = () => {
        const choices = ["rock", "paper", "scissors"];
        setHouse(choices[Math.floor(Math.random() * 3)])
    }
    useEffect(() => {
        newHousePick();
    }, [])

    const Result = () => {
        if (myChoice === "rock" && house === "scissors") {
            setPlayerWin("win");
            setScore(score + 1)
        } else if (myChoice === "rock" && house === "paper") {
            setPlayerWin("lose");
            setScore(score - 1)
        } else if (myChoice === "scissors" && house === "paper") {
            setPlayerWin("win");
            setScore(score + 1)
        } else if (myChoice === "scissors" && house === "rock") {
            setPlayerWin("lose");
            setScore(score - 1)
        } else if (myChoice === "paper" && house === "rock") {
            setPlayerWin("win");
            setScore(score + 1)
        } else if (myChoice === "paper" && house === "scissors") {
            setPlayerWin("lose");
            setScore(score - 1)
        } else {
            setPlayerWin("draw")
        }
    }
    useEffect(() => {
        const timer =
            counter > 0
                ? setInterval(() => {
                    setCounter(counter - 1)
                }, 1000)
                : Result();
        return () => {
            clearInterval(timer)
        }
    }, [counter, house])

    return (
        <div className="game">
            <div className="game__you">
                <span className="text">You Picked</span>
                <div className={`choice choice-btn  ${myChoice} `}>
                    <div className={`${playerWin === "win" ? "winner" : ""}`}></div>
                </div>

            </div>
            {
                playerWin === "win" && <div className="result">
                    <span>you win</span>
                    <Link to="/" className="play-again" onClick={() => setHouse()}>
                        play again
                    </Link>
                </div>
            }
            {
                playerWin === "lose" && <div className="result">
                    <span>you lose</span>
                    <Link to="/" className="play-again" onClick={() => setHouse()}>
                        play again
                    </Link>
                </div>
            }
            {
                playerWin === "draw" && <div className="result">
                    <span>Draw</span>
                    <Link to="/" className="play-again" onClick={() => setHouse()}>
                        play again
                    </Link>
                </div>
            }
            <div className="game__house">
                <span className="text">The House Picked</span>
                {
                    counter == 0 ? <div className={`choice choice-btn ${house}`}>
                        <div className={`${playerWin === "lose" ? "winner" : ""}`}></div>
                    </div> : <div className="counter">{counter}</div>
                }
            </div>
        </div>
    )
}

