import React, { useState, useContext } from 'react';
import "../Styling/App.css";
import { Questions } from '../CustomHelpers/Questions'
import { QuizContext } from '../CustomHelpers/Context'

export default function Quiz() {

    const { score, setScore, setState } = useContext(QuizContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1)
    }

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1)
        }
        setState('endScreen')
    }

    return (

        <div className='quiz'>

            <h1 className='Qname'>{Questions[currentQuestion].question}</h1>

            <div className='options'>

                <button className='option' onClick={() => setOptionChosen('A')}>{Questions[currentQuestion].optionA}</button>

                <button className='option' onClick={() => setOptionChosen('B')}>{Questions[currentQuestion].optionB}</button>

                <button className='option' onClick={() => setOptionChosen('C')}>{Questions[currentQuestion].optionC}</button>

                <button className='option' onClick={() => setOptionChosen('D')}>{Questions[currentQuestion].optionD}</button>

            </div>
            {currentQuestion === Questions.length - 1
                ?
                (<button className='movingBtn' onClick={finishQuiz}>Finish Quiz</button>)
                :
                (<button className='movingBtn' onClick={nextQuestion}>Next Question</button>)
            }

        </div>
    )
}
