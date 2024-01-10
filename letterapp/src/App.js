import { Quiz } from './components/Quiz';
import './App.css';
function App() {
  return (
    <>
      <div className="quiz">
        <h1 id="title">Guess the Letter</h1>

        <div className='quiz-question'>
          <Quiz />

        </div>
      </div>

    </>
  );
}

export default App;
