import React, { Component} from 'react'
import '../../css/start.css';
import textCloud from '../../img/textCloud.png'
import robot from '../../img/robot.png'


export class Start extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      text : "Welkom, op het ruimteschip techsharks!",
      buttonText : "Verder",
      textAnswers: ""
    }
  }

  handleClick = () => {
    console.log(this.state.count);
    this.setState({ count : this.state.count + 1});
    switch(this.state.count){
      case 0:
        this.setState({text : "Ik zal jouw hulpje zijn gedurende de escape!"});
        break;
      case 1:
        this.setState({text : "Kom je er niet uit bij een puzzel klik dan op mij rechtsboven in het scherm."});
        break;
      case 2: 
        this.setState({text : "Laten we beginnen, we zetten koers naar Mars!"});
        this.setState({buttonText : "Coördinaten invoeren"});
        break;
      case 3:
        let coordinatesDiv = document.getElementById("coordinatesDiv");
        let startingDiv = document.getElementById("intro");
        let hint = document.getElementById("hintButton");
        startingDiv.style.display = "none";
        hint.style.display = "block";
        coordinatesDiv.style.display = "block";
        break;
      case 4:
        window.location.href = "/firstPuzzle"
      
  }
  }

  handleAnswer = (answerNumber) => {
    let onjuist = document.getElementById("antwoordenGroep-onjuist");
    let juist = document.getElementById("antwoordenGroep-juist");
    let antwoordenGroepButton = document.getElementById("button-group-second");

    if(answerNumber === 1){
      this.setState({ textAnswers : "dit zijn coördinaten voor planeten"})
      onjuist.style.display = "block";
    }if(answerNumber === 2){
      this.setState({ textAnswers : "dit zijn coördinaten voor plaatsen"})
      onjuist.style.display = "block";
    }if(answerNumber === 3){
      onjuist.style.display = "none";
      juist.style.display = "block";
      antwoordenGroepButton.style.display = "block";
    }
  }

  hideInfo(){
    let hideDiv = document.getElementById("infoPopUp");
    let changeOpacity = document.getElementById("startingDiv");
    changeOpacity.style.opacity = "1";
    hideDiv.style.display = "none";
  }
  
  openInfo(){
    let hideDiv = document.getElementById("infoPopUp");
    let changeOpacity = document.getElementById("startingDiv");
    changeOpacity.style.opacity = "0.5";
    hideDiv.style.display = "flex";
  }


  render() {
   
    return (
      <section className="startingDiv" >
        <section className="intro" id="startingDiv">
          <div className="zookeeper-div" id="intro">
            <img className="robot-img" src={robot}/>
            <img className="text-cloud" src={textCloud} />
            <div className="textCloud-innertext">
              <p className="text">{this.state.text}</p>
              <div className="button-group">
                <button className="button-primary" onClick={() => this.handleClick()}>{this.state.buttonText}</button>
              </div>
            </div>
          </div>

          <div className="coordinatesDiv" id="coordinatesDiv">
              <h1>Om naar Mars te komen moeten er coördinaten worden ingevuld.</h1>
              <p>Welke van de drie antwoorden is <b>GEEN</b> voorbeeld van een coördinaat.</p>
              <div className="antwooordenGroep">
                <div className="antwoordenGroep-buttons">
                  <button className="button-answer" onClick={() => this.handleAnswer(1)}>RK 21u 21m 40s | Dec -16° 41′ 37″</button>
                  <button className="button-answer" onClick={() => this.handleAnswer(2)}>52.0115769, 4.3570677</button>
                  <button className="button-answer" onClick={() => this.handleAnswer(3)}>2286 KG</button>
                </div>
                <p className="antwoordenGroep-juist" id="antwoordenGroep-juist">Dat is goed! Dit is een postcode, zo kan er post naar je huis worden verzonden!</p>
                <p className="antwoordenGroep-onjuist" id="antwoordenGroep-onjuist">Helaas dat is niet goed {this.state.textAnswers}</p>
              </div>
              <div className="button-group-second" id="button-group-second">
                <button className="button-primary" onClick={() => this.handleClick()}>{this.state.buttonText}</button>
              </div>
          </div>
          <div className="hintButton" id="hintButton" onClick={() => {this.openInfo()}}>
            <img className="robot-img-info" src={robot}/>
          </div>
        </section>
        <div className="infoPopUp" id="infoPopUp">
                <div className="intro-kaartPuzzle">
                    <h1 className="headerOne">
                        Help, ik kom er niet uit!
                    </h1>
                    <p>Klik eens op de button met de tekst 2286 KG!</p>
                    <div className="buttonGroup">
                        <button className="button" onClick={() => {this.hideInfo()}}>Ga verder met puzzel</button>
                    </div>
              </div>
            </div>
      </section>
    )
  }
}

export default Start