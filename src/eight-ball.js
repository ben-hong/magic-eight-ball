import React, { useState } from "react";
import "./eight-ball.css";

function EightBall(props) {
    const { answers } = props;

    const [answer, setAnswer] = useState({ msg: "Think of a Question", color: "black" });
    const [scores, setScores] = useState({greenScore: 0, redScore: 0, goldenrodScore: 0});

    let counters = function () {
        if (answer.color === "green") {
            scores.greenScore++
        } else if (answer.color === "red") {
            scores.redScore++
        } else if (answer.color === "goldenrod") {
            scores.goldenrodScore++
        }
    }
    
    let randAnswer = function () {
        let idx = Math.floor(Math.random() * answers.length);
        setScores(counters);
        return answers[idx];
    }
    
    console.log("scores", scores)

    // {scores.greenScore}
    // {scores.redScore}
    // {scores.goldenrodScore}

    return (
        <div className="gameDiv">
            <div className="eightball" onClick={() => setAnswer(randAnswer)}style={{ background: answer.color }}>
                {answer.msg}
                
            </div>
            <div className="button">
                <button onClick={() => setAnswer({ msg: "Think of a Question", color: "black" })}>Reset!</button>
            </div>
        </div>
    )
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]

}

export default EightBall;