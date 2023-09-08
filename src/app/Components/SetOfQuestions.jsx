import styles from "../page.module.css"
import { useEffect, useState } from "react";
import Question from "./Question"
import axios from "axios";

function SetOfQuestions(props) {
    const API_LINK = "https://opentdb.com/api.php?amount=10&";
    const difficulty = props.difficulty;
    const [triviaQuestions, setQuestions] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await axios.get(API_LINK + "difficulty=" + difficulty);
            setQuestions(result.data.results);
        } 
        getData()
    }, []); 

    return(<div className={styles.questionsContainer}>
        {triviaQuestions.length === 0 ? <p>loading</p> : triviaQuestions.map((question, i) => 
            <div>
                <Question 
                    number = {i+1}
                    type = {question.type}
                    question = {question.question}
                    correctAnswer = {question.correct_answer}
                    incorrectAnswers = {question.incorrect_answers}
                    gradeAnswer = {props.gradeAnswer}
                    submitted = {props.submitted}
                    answerPoints = {props.answerPoints}
                />
            </div>
        )}
    </div>)
}

export default SetOfQuestions; 