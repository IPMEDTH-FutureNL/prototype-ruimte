import React, { Component } from 'react'
import '../../css/puzzleOne.css';
import  LinksBoven  from '../../img/PuzzelStukjes/Linksboven.png'
import  LinksOnder  from '../../img/PuzzelStukjes/Linksonder.png'
import  Midden  from '../../img/PuzzelStukjes/Midden.png'
import  Rechtsboven  from '../../img/PuzzelStukjes/Rechtsboven.png'
import  Rechtsmidden  from '../../img/PuzzelStukjes/Rechtsmidden.png'
import  Rechtsonder  from '../../img/PuzzelStukjes/Rechtsonder.png'
import  { Draggable } from 'drag-react';



export class DragAndDrop extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      text : "Oh nee, het hek! Waar is mijn sleutel?",
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

  render() {
    return (
      <section className="mapPuzzle">
          <div className="overlay" id="overlay">hiddentext</div>
            <div className="startPopUp" id="startPopUp">
                <div className="intro-kaartPuzzle">
                    <h1 className="headerOne">
                        De kaart lig in stukken..
                    </h1>
                    <p>Voordat we weten hoe we bij het olifanten verblijf komen, moeten we de stukje aan elkaar leggen.</p>
                    <div className="buttonGroup">
                        <button className="button" onClick={() => {this.hideOverLay()}}>Los op!</button>
                    </div>
              </div>
          </div>
          <div className="puzzelstukjes">
            <Draggable>
              <img src={LinksBoven} />
            </Draggable>
            <Draggable>
              <img src={LinksOnder} />
            </Draggable>
            <Draggable>
              <img src={Midden} />
            </Draggable>
            <Draggable>
              <img src={Rechtsboven} />
            </Draggable>
            <Draggable>
              <img src={Rechtsonder} />
            </Draggable>
            <Draggable>
              <img src={Rechtsmidden}/>
            </Draggable>
          </div>
         
      </section>
     
    )
  }
}

export default DragAndDrop;