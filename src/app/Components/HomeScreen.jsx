"use client"
import {Orbitron} from "next/font/google"
import styles from "../page.module.css"

const orbitron = Orbitron({weight:"400", subsets: ["latin"]})

function HomeScreen(props) {
    return(<div className={`${styles.homeMessage}`} >
        <h1 className={orbitron.className}>Welcome to Kim's Trivia!</h1>

        <p>Choose a level:</p>
        <div className={styles.buttonsID}>
            <button className={`${styles.easyButton} ${styles.btn}`} onClick={() => props.handleClick("easy")}>Easy</button>
            <button className={`${styles.mediumButton} ${styles.btn}`} onClick={() => props.handleClick("medium")}>Medium</button>
            <button className={`${styles.hardButton} ${styles.btn}`} onClick={() => props.handleClick("hard")}>Hard</button>
        </div>
    </div>)
}

export default HomeScreen; 