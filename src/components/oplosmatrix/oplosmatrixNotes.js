//oplosmatrix puzzel
import React, { Component } from 'react';
import '../../css/oplosmatrixNotes.css';
import elephantIcon from'../../img/planet.png';
import tigerIcon from'../../img/rocket.png';
import monkeyIcon from'../../img/ufo.png';

export class OplosmatrixNotes extends Component{

    returnMainScreen = () =>{
        window.location.href= ("/oplosmatrix")
    }

    render(){
        return(
            <section className='note'>
                <section className='note-center'>
                    <div className='oplosmatrix-grid'>
                        

                    </div>
                </section>
                <button className='exitButton' onClick={this.returnMainScreen}>x</button>
            </section>
            
        )
    }
}

export default OplosmatrixNotes