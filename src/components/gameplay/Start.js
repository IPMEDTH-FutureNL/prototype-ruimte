import React, { Component} from 'react'
import '../../css/start.css';
import zookeeperImage from '../../img/zookeeper.png'
import textCloud from '../../img/textCloud.png'

export class Start extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      text : "Welkom, wat leuk dat je een verhaal wilt schrijven over onze dierentuin!",
      buttonText : "Verder"
    }
  }

  handleClick = () => {
    console.log("handleClick");
    this.setState({ count : this.state.count + 1});
    switch(this.state.count){
      case 0:
        this.setState({text : "Ik zal je een rondleiding geven door de dierentuin."});
        break;
      case 1:
        this.setState({text : "Daarvoor moet ik eerst de papieren van de dierentuin pakken."});
        break;
      case 2: 
        this.setState({text : "Als jij alvast naar binnen gaat zal ik de papieren pakken."});
        this.setState({buttonText : "Naar binnen"});
        break;
      case 3:
        window.location.href="/firstPuzzle";
        break;
  }
  }


  render() {
   
    return (
      <section className="startingDiv">
        <section className="intro">
          <div className="zookeeper-div">
            <img className="zookeeper-img" src={zookeeperImage}/>
            <img className="text-cloud" src={textCloud} />
            <div className="textCloud-innertext">
              <p className="text">{this.state.text}</p>
              <button className="button-primary" onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Start