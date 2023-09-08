"use client" 
import styles from '../page.module.css'
import {useState} from "react"; 
import SetOfQuestions from './SetOfQuestions';
import axios from 'axios';
import { useEffect } from 'react';

function TriviaGame(props) {
    const [gameRound, setRound] = useState(1);
    const [submitted, setSubmitted] = useState(false)
    const difficulty = props.difficulty;
    const [answerPoints, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    function showScore(userCorrectness) {
        setSubmitted(true); 
        const totalPoints = userCorrectness.reduce((partialSum, a) => partialSum + a, 0);
        props.setScore(props.score + totalPoints);
    }

    function gradeAnswer(index, points) {
        setPoints((prevPoints) => {
            prevPoints[index] = points; 
            return prevPoints;
        })
    }

    function nextRound() {
        setRound((prevState) => {
            setSubmitted(false); 
            console.log(prevState); 
            if (prevState < 3) {
                return prevState+1; 
            } else {
                setRound(0); 
                props.endGame()
            }
        });
        setPoints([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); 
    }

    return(<div className={styles.gameContainer}>
        <p className={styles.scoreBox}>Score: {props.score}/30</p>
        <h2 className={styles.roundHeader}>Round {gameRound}</h2>
        <p className={styles.levelIndicator}>Level: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</p>
        <div>
            <SetOfQuestions
                key = {gameRound}
                difficulty = {difficulty}
                gradeAnswer = {gradeAnswer}
                submitted = {submitted}
                answerPoints = {answerPoints}
                round = {gameRound}
            />   
        </div>
        {submitted? 
            <button className={`${styles.btn}`} type="submit" onClick={() => nextRound()}>Next</button> : 
            <button className={`${styles.btn}`} type="submit" onClick={() => showScore(answerPoints)}>Submit</button>}
    </div>)
}; 

export default TriviaGame; 