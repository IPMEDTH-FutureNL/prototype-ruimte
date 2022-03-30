import React, { Component } from 'react'
import textCloud from '../../img/textCloud.png'
import robot from '../../img/robot.png'

export class OverGangBurak extends Component {
    constructor(props){
        super(props);
        this.state = {
          count : 0,
          text : "We zijn onderweg naar Mars!",
          buttonText : "Verder",
          textAnswers: ""
        }
      }
    
      handleClick = () => {
        console.log(this.state.count);
        this.setState({ count : this.state.count + 1});
        switch(this.state.count){
          case 0:
            this.setState({text : "Het is nu tijd om alle onderdelen van het schip in de gaten te houden!"});
            break;
          case 1:
            this.setState({text : "Ai, ik krijg door dat de motor niet lekker loopt!"});
            break;
          case 2: 
            this.setState({text : "Laten we op onderzoek uit gaan naar de motor!"});
            this.setState({buttonText : "Ga naar motor kamer"});
            break;
          case 3:
            window.location.href = "/elephantEntry"
          
      }
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
    
            </section>
          </section>
        )
      }
}

export default OverGangBurak