import React, { Component } from 'react'
import '../../css/intro.css';

export class Intro extends Component {

    componentDidMount = () => {
        let start = new Date();
        let minutes = start.getMinutes();
        localStorage.setItem("userTime", minutes);
        console.log(minutes);
    }

  startWithEscape(){
    window.location.href="/start";
  }

  render() {
    return (
      <div className="introEscape">
          <div className="introText">
              <h1 className="headerOne">
                  Welkom bij de ruimte escape!
              </h1>
              <p>Tijdens deze escape wordt je meegenomen door het ruimteschip!</p>
              <button className='btn-primary' onClick={() => {this.startWithEscape()}}>Begin met de escape</button>
          </div>

      </div>
    )
  }
}

export default Intro