import React, { useContext } from 'react'
import { QuizContext } from '../CustomHelpers/Context'
import "../Styling/App.css";
import { Questions } from '../CustomHelpers/Questions';

export default function EndScreen() {

    const { score, setScore, setState } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0)
        setState('menu')
    }

    return (

        <div className='endScreen'>

            <h1>Quiz Finished!</h1>

            <h3>{score} / {Questions.length}</h3>

            <button className='restartBtn' onClick={restartQuiz}>Restart Quiz</button>
        </div>

    )
}
