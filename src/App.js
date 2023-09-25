import { useState, } from "react";
import "./Styling/App.css";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./CustomHelpers/Context";

function App() {

  const [state, setState] = useState("menu");

  const [score, setScore] = useState(0);

  return (

    <div className='App'>

      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ state, setState, score, setScore }}>

        {state === 'menu' && <MainMenu />}

        {state === 'quiz' && <Quiz />}

        {state === 'endScreen' && <EndScreen />}

      </QuizContext.Provider>
    </div>

  )

}


export default App;
