import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/ending.css';

export class Ending extends Component {
  componentDidMount = () => {
    this.calculateScore();
  }

  calculateScore = () => {
    let userStartTime = localStorage.getItem("userTime");
    let userEndTime = new Date();

    let minutesPast = userEndTime.getMinutes();

    let calculateEndScore = minutesPast - userStartTime;
    let writeScoreOnScreen = document.getElementById('score');

    if(calculateEndScore <= 5){
        writeScoreOnScreen.innerHTML = "Jouw Score is " + 200 + "xp";
    }else if(calculateEndScore <= 7){
        writeScoreOnScreen.innerHTML = "Jouw Score is " + 150 + "xp";
    }else if(calculateEndScore <= 10){
        writeScoreOnScreen.innerHTML = "Jouw Score is " + 100 + "xp";
    }else if(calculateEndScore <= 15){
        writeScoreOnScreen.innerHTML = "Jouw Score is " + 50 + "xp";
    }else if(calculateEndScore <= 20){
        writeScoreOnScreen.innerHTML = "Jouw Score is " + 50 + "xp";
    }

  }
  render() {
    return (
        <div className="introEscape">
        <div className="introText">
            <h1 className="headerOne">
              Je bent ontsnapt!
            </h1>
            <p>Je bent ontsnapt uit de dierentuin! Goed gedaan!</p>
            <p id="score"> </p>
            <Link to="/" className='btn-primary' >Terug naar het begin!</Link>
        </div>

        </div>
    )
  }
}

export default Ending