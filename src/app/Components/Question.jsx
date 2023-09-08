import styles from "../page.module.css"
import AnswerChoice from "./AnswerChoice"
import { useEffect, useState } from "react";

function Question(props) {
    const answerChoices = [props.correctAnswer, ...props.incorrectAnswers];
    const submitted = props.submitted

    function shuffle(answers) {
        for (let i = answers.length -1; i>0; i--) {
            const j = Math.floor(Math.random()* (i+1)); 
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        return answers
    }

    const [shuffledAnswers, setShuffledAnswers] = useState(shuffle(answerChoices))

    function checkAnswer(event) {
        const userSelection = event.target.value; 
        if (userSelection === props.correctAnswer) {
            props.gradeAnswer((props.number -1), 1);
        } else {
            props.gradeAnswer((props.number -1), 0)
        }
    }

    return(<div 
            className={styles.questionCard} 
            style={{backgroundColor: (submitted && props.answerPoints[props.number - 1] === 1) ? '#6AA84F': '#696969'}}>
        <h3>Question {props.number}:</h3>
        {props.type === "boolean" ? <p style={{fontWeight: 400}}>True or False</p> : null}
        <p dangerouslySetInnerHTML={{ __html:props.question }}></p>
        <div onChange={checkAnswer}>
            {shuffledAnswers.map((item) => (
                <AnswerChoice
                    name = {props.number} 
                    text = {item}
                    submitted = {props.submitted}
                    correctAnswer = {props.correctAnswer}
                />
            ))}    
        </div>
        
    </div>)
    

}

export default Question; 