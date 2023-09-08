import {Orbitron} from "next/font/google"
import styles from "../page.module.css"

const orbitron = Orbitron({weight:"400", subsets: ["latin"]})

function EndScreen(props) {
    return(<div className={`${styles.homeMessage}`}>
        <h1 className={`${orbitron.className}`}>Game Over</h1>
        <p className={`${orbitron.className}`}>Points: {props.score}/30</p>
        <button 
            onClick={props.startOver}
            className={styles.btn}
        >Play Again</button>
    </div>)
}

export default EndScreen; 