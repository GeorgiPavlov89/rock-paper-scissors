import "./App.css";
import Header from "./components/Header"
import Game from "./components/Game"
import Play from "./components/Play"
import Rules from "./components/Rules"
import { Routes, Route } from "react-router-dom";
import { useState } from "react"


function App() {

  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0)

  return (

    <div className="container App">
      <Header score={score} />
      <Routes>
        <Route exact path="/" element={<Play setMyChoice={setMyChoice} />} />
        <Route path="/game"
          element={<Game
            myChoice={myChoice}
            score={score}
            setScore={setScore} />} />
        <Route />
      </Routes>
      <Rules />
    </div>


  );
}

export default App;
