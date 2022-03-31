import React, { Component } from 'react'
import '../../css/puzzleOne.css';
import  CTRLC  from '../../img/PuzzelStukjes/Controls/CTRLC.png'
import  CTRLV  from '../../img/PuzzelStukjes/Controls/CTRLV.png'
import  CTRLZ from '../../img/PuzzelStukjes/Controls/CTRLZ.png'
import CTRLF from '../../img/PuzzelStukjes/Controls/CTRLF.png'
import robot from '../../img/robot.png'
import oplossing from '../../img/PuzzelStukjes/Controls/oplossing.png'


//import { Link } from 'react-router-dom'

export class DragAndDrop extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      buttonText : "Zet koers naar Mars",
    }
}

componentDidMount = () => {
  let hint = document.getElementById("hintButton");
  hint.style.display = "block";
  let hideDiv = document.getElementById("infoPopUp");
  hideDiv.style.display = "none";
}






hideOverLay(){
    let hideDiv = document.getElementById("overlay");
    let hidePopUp = document.getElementById("startPopUp");
    let zooKeeper = document.getElementById("zookeeper-div2");
    hideDiv.style.display = "none";
    hidePopUp.style.display = "none";
    zooKeeper.style.display = "flex";
}

hideInfo(){
  let hideDiv = document.getElementById("infoPopUp");
  hideDiv.style.display = "none";
}

openInfo(){
  let hideDiv = document.getElementById("infoPopUp");
  hideDiv.style.display = "flex";
}

allowDrop = (e) => {
  e.preventDefault();
}

drag = (e) => 
{
  e.dataTransfer.setData("content",e.target.id);
}

drop = (e) =>
{
  e.preventDefault();
        var image = e.dataTransfer.getData("content");
  if (e.target.id === document.getElementById(image).getAttribute('data-div')){         
      e.target.appendChild(document.getElementById(image));
      let changeOpacity = document.getElementById(e.target.id);
      changeOpacity.style.backgroundColor = "transparent";
      changeOpacity.style.color = "transparent"
      this.setState({count : this.state.count + 1})
      console.log(this.state.count);

      if(this.state.count === 3){
        let showPopUp = document.getElementById("Puzzel-voldaan");
        let showDiv = document.getElementById("solutionDiv");
        showPopUp.style.display = "block";
        showDiv.style.display = "block";
      }
  }
  else{
     alert("Dat is helaas niet goed, probeer het nog een keer!");
  }
}

showButton(){
  let showButton = document.getElementById("buttonGroup-voldaan");
  showButton.style.display = "block";
}

handleAnswer = (answerNumber) => {
  let onjuist = document.getElementById("antwoordenGroep-onjuist");
  let juist = document.getElementById("antwoordenGroep-juist");
  let antwoordenGroepButton = document.getElementById("button-group-second");

  if(answerNumber === 1){
    this.setState({ textAnswers : "dit is de toets voor het vinden van tekst op een pagina."})
    onjuist.style.display = "block";
  }if(answerNumber === 2){
    this.setState({ textAnswers : "dit is de toets om tekst te kopiëren."})
    onjuist.style.display = "block";
  }if(answerNumber === 3){
    onjuist.style.display = "none";
    juist.style.display = "block";
    antwoordenGroepButton.style.display = "block";
  }
}

handleClick = () => {
  window.location.href = "/overgangBurak"
}



  render() {
    return (
      <section className="mapPuzzle">
          <div className="hintButton" id="hintButton" onClick={() => {this.openInfo()}}>
            <img className="robot-img-info" src={robot}/>
          </div>


            <div className="hideSolution" id="infoPopUp">
                <div>
                    <h1 className="headerOne">
                        Ik krijg het niet opgelost?
                    </h1>
                    <p>Zet de plaatjes in de volgorde van de afbeelding hieronder:</p>
                    <img className="oplossing" src={oplossing}></img>
                    <div className="buttonGroup">
                        <button className="button" onClick={() => {this.hideInfo()}}>Ga verder</button>
                    </div>
              </div>
            </div>

            <div className="intro-kaartPuzzle">
                    <h1 className="headerOne">
                        Wat moet ik doen?
                    </h1>
                    <p>Voordat we weten hoe we de coördinaten in de computer moeten invullen moeten we eerste de juiste volgorde bepalen van onderstaande afbeeldingen.</p>
                    <p>Sleep de juiste control toets naar het juiste roze vakje!</p>
                
            </div>
          
          <div className="board">
            <div id="div1" className="div-board" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>Zoeken</div>
            <div id="div2" className="div-board" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} >Ongedaan maken</div>
            <div id="div3" className="div-board" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>Kopiëren</div>
            <div id="div4" className="div-board" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>Plakken</div>
          </div>

          <div className="puzzelstukjes">
            <img id="drag1" data-div="div3" src={CTRLC} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag2" data-div="div4" src={CTRLV} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag3"  data-div="div1" src={CTRLF} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag4"  data-div="div2" src={CTRLZ} draggable="true" onDragStart={(event) => this.drag(event)}/>
          </div>
         

          <div className="hideSolution" id="Puzzel-voldaan">
                <div className="solutionDiv" id="solutionDiv">
  
                <h1>Om naar Mars te komen moet de volgende vraag worden beantwoord.</h1>
                <p>Welke control toets was de ongedaan maken toets?</p>
                <div className="antwooordenGroep">
                  <div className="antwoordenGroep-buttons">
                    <button className="button-answer" onClick={() => this.handleAnswer(1)}>CTRL + F</button>
                    <button className="button-answer" onClick={() => this.handleAnswer(2)}>CTRL + C</button>
                    <button className="button-answer" onClick={() => this.handleAnswer(3)}>CTRL + Z</button>
                  </div>
                  <p className="antwoordenGroep-juist" id="antwoordenGroep-juist">Dat is goed! Dit is de toets waarmee je een actie kan terugdraaien</p>
                  <p className="antwoordenGroep-onjuist" id="antwoordenGroep-onjuist">Helaas dat is niet goed {this.state.textAnswers}</p>
                </div>
                <div className="button-group-second" id="button-group-second">
                  <button className="button-primary" onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
     
              </div>
            </div>
      </section>
     
    )
  }
}

export default DragAndDrop;