import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/ending.css';

export class Ending extends Component {
 

  
  render() {
    return (
        <div className="introEscape-ending">
        <div className="introText">
            <h1 className="headerOne">
              Goed gedaan! 
            </h1>
            <p className="p-text">Je hebt ons veilig op Mars gebracht en alle opdracht voltooid!</p>
            <Link to="/" className='btn-primary' >Terug naar het begin!</Link>
        </div>

        </div>
    )
  }
}

export default Ending