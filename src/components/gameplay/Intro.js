import React, { Component } from 'react'
import '../../css/intro.css';

export class Intro extends Component {
  startWithEscape(){
    window.location.href="/start";
  }

  render() {
    return (
      <div className="introEscape">
          <div className="introText">
              <h1 className="headerOne">
                  Welkom bij de dierentuin escape!
              </h1>
              <p>Los zo snel mogelijk de puzzels op om de meeste punten te behalen!</p>
              <button className='btn-primary' onClick={() => {this.startWithEscape()}}>Begin met de escape</button>
          </div>

      </div>
    )
  }
}

export default Intro