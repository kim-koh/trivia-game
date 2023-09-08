"use client"

import {useState} from "react"; 
import styles from "./page.module.css"
import HomeScreen from "./Components/HomeScreen.jsx"
import TriviaGame from "./Components/TriviaGame.jsx";
import EndScreen from "./Components/EndScreen";

var gameInProgress = false; 
 
function App() {
  const [difficulty, setDifficulty] = useState(""); 
  const [score, setScore] = useState(0); 
  const [gameState, setGameState] = useState("home")

  function startGame(level) {
    setDifficulty(level); 
    setGameState("in progress"); 
  }

  function endGame() {
    setGameState("game over")
  }
  
  function backToHome() {
    setScore(0); 
    setGameState("home"); 
    setDifficulty(""); 
  }

  if (gameState === "in progress") {
    return(<div>
      <TriviaGame
         difficulty = {difficulty} 
         score = {score}
         setScore = {setScore}
         endGame = {endGame}
      />
    </div>)
  } else if (gameState === "home") {
    return(<div className={styles.container}>
      <HomeScreen
        handleClick = {startGame}
        gameState = {gameState}
      />
    </div>)
  } else if (gameState === "game over") {
    return(<div className={styles.container}>
        <EndScreen
          score = {score}
          startOver = {backToHome}
        />
    </div>)
  }
}

export default App; 
