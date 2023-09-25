import React, { useContext } from 'react'
import { QuizContext } from '../CustomHelpers/Context'
import "../Styling/App.css";

export default function MainMenu() {

    const { setState } = useContext(QuizContext);
    return (
        <div className='menu'>
            <button onClick={() => { setState('quiz') }}>Start Quiz</button>
        </div>
    )
}
