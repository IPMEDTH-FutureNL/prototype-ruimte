import React, { Component } from 'react'
import '../../css/puzzleOne.css';
import textCloud from '../../img/textCloud.png'
import robot from '../../img/robot.png'



export class OvergangPuzzelEen extends Component {
  constructor(props){
      super(props);
      this.state = {
        count : 0,
        text : "De computer voor de coördinaten is stuk!",
        buttonText : "Verder"
      }
  }

  hideOverLay(){
      let hideDiv = document.getElementById("overlay");
      let hidePopUp = document.getElementById("startPopUp");
      let zooKeeper = document.getElementById("zookeeper-div2");
      hideDiv.style.display = "none";
      hidePopUp.style.display = "none";
      zooKeeper.style.display = "flex";
  }


    handleClick = () => {
        console.log("handleClick");
        this.setState({ count : this.state.count + 1});
        switch(this.state.count){
          case 0:
            this.setState({text : "Om naar mars te gaan moeten we de computer weer maken"});
            break;
          case 1: 
            this.setState({text : "Het lijkt er op dat de kabels niet meer goed werken."});
            this.setState({buttonText : "Los op!"});
            break;
          case 2:
            window.location.href="/puzzleMap";
            break;
      }
    }
  

  render() {
    return (
        <section className="puzzleOne">
            <div className="overlay" id="overlay">hiddentext</div>
            <div className="introText" id="startPopUp">
                <div className="text">
                    <h1 className="headerOne">
                        Dang....
                    </h1>
                    <p>Een harde knal!</p>
                    <p>De computer in het ruimte schip is uitgevallen!</p>
                    <div className="buttonGroup">
                        <button className="button" onClick={() => {this.hideOverLay()}}>Bekijk computer</button>
                    </div>
                </div>
            </div>
            <div className="zookeeper-div2" id="zookeeper-div2">
                <img className="robot-img" src={robot}/>
                <img className="text-cloud" src={textCloud} />
                <div className="textCloud-innertext">
                <p className="text">{this.state.text}</p>
                <button className="button-primary" onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
          </div>
        </section>
    )
  }
}

export default OvergangPuzzelEen