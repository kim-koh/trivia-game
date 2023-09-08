function AnswerChoice(props) {
    return(<div style={{backgroundColor: (props.submitted && props.text === props.correctAnswer) ? '#6AA84F': null}}>
       <input type="radio" name={props.name} value={props.text}/>
        <label 
            dangerouslySetInnerHTML={{ __html: props.text }}
        ></label>
    </div>)
}
    

export default AnswerChoice; 