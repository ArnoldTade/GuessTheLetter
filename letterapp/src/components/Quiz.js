import React, { useState } from 'react'

const ArrayView = ({ letter, userinput, score, onNextClick }) => {
    const [currentIndex, setCurrentindex] = useState(0);
    const [currentScore, setCurrentScore] = useState(score);

    const handleScore = () => {
        setCurrentScore((prevScore) => prevScore + 1);
    };

    const handleNext = () => {
        if (currentIndex < letter.length - 1) {
            setCurrentindex((prevIndex) => prevIndex + 1);
            onNextClick('');
        } else {
            alert('Your score is ' + currentScore)
        }

    }
    const handleSubmit = () => {
        if (userinput.toUpperCase() === letter[currentIndex].charAt(0)) {
            handleScore()
            alert('correct')

        } else {
            alert("Incorrect")
        }
        handleNext()
    }
    return (
        <>
            <h2 id="quiz-score">score: {[currentScore]}</h2>
            <h3 id="letter-text">{letter[currentIndex].substring(1)}</h3>
            <button id="quiz-submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            letter: [
                'BIGGER',
                'DOCK',
                'FUSSY',
                'HUNT',
                'DIGGER',
                'SHORE',
                'LUCK',
                'LOVE'
            ],
            userInput: '',
            score: 0
        };
    };
    handleInput = (event) => {
        this.setState({ userInput: event.target.value })
    };
    handleNext = (value) => {
        this.setState({ userInput: value });
    };
    render() {
        return (
            <>
                <input id="miss-letter" value={this.state.userInput} onChange={this.handleInput} placeholder='__'></input>
                <ArrayView letter={this.state.letter} userinput={this.state.userInput}
                    score={this.state.score} onNextClick={this.handleNext} />
            </>
        );
    }

};
export default Quiz
