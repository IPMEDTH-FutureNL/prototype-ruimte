import React, { Component } from 'react'
import '../../css/puzzleOne.css';
import  CTRLC  from '../../img/PuzzelStukjes/Controls/CTRLC.png'
import  Muis  from '../../img/PuzzelStukjes/Controls/muis.png'
import  CTRLV  from '../../img/PuzzelStukjes/Controls/CTRLV.png'
import Selecteren from '../../img/PuzzelStukjes/Controls/selecteren.png'
import robot from '../../img/robot.png'
import oplossing from '../../img/PuzzelStukjes/Controls/oplossing.png'


import { Link } from 'react-router-dom'

export class DragAndDrop extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
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
      alert("ok");          
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
     alert("wrong");
  }
}

showButton(){
  let showButton = document.getElementById("buttonGroup-voldaan");
  showButton.style.display = "block";
}


  render() {
    return (
      <section className="mapPuzzle">
          <div className="hintButton" id="hintButton" onClick={() => {this.openInfo()}}>
            <img className="robot-img-info" src={robot}/>
          </div>


            <div className="hideSolution" id="infoPopUp">
                <div className="introText">
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
                    <p>Je moet een stuk tekst kopiëren en plakken zet de plaatjes in de juiste volgorde!</p>
                
            </div>
          
          <div className="board">
            <div id="div1" className="div-board" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>1</div>
            <div id="div2" className="div-board" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} >2</div>
            <div id="div3" className="div-board" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>3</div>
            <div id="div4" className="div-board" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>4</div>
          </div>

          <div className="puzzelstukjes">
            <img id="drag1" data-div="div3" src={CTRLC} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag2" data-div="div4" src={CTRLV} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag3"  data-div="div1" src={Muis} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img id="drag4"  data-div="div2" src={Selecteren} draggable="true" onDragStart={(event) => this.drag(event)}/>
          </div>
         
          <div className="hideSolution" id="Puzzel-voldaan">
                <div className="solutionDiv" id="solutionDiv">
                    <h1 className="headerOne-voldaan">
                        Goed gedaan, plak nu de coördinaten in de de witte balk!
                    </h1>
                    <p>Kopieer: </p>
                    <p>RK 21u 21m 40s | Dec -16° 41′ 37″</p>

                    <p>Plak deze hieronder:</p>
                    <input className="inputGroup" onChange={() => this.showButton()}></input>
                    <div className="buttonGroup-voldaan" id="buttonGroup-voldaan">
                        <Link to="/overgangBurak" className="button-primary" >Zet koers naar Mars!</Link>
                    </div>
              </div>
            </div>
      </section>
     
    )
  }
}

export default DragAndDrop;