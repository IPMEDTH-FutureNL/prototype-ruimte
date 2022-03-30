//main page
import React, { Component } from 'react';
import '../../css/oplosmatrix.css';

export class Oplosmatrix extends Component{

    //switch statement om naar de andere pagina's te gaan

    render(){
        return(
            <section className=''>
                <section className='clickable-lock' onClick={()=> this.handleOnClick()}>
                    slot
                </section>
                <section className='clickable-note' onClick={()=> this.handleOnClick()}>
                    note
                </section>
                <section className='clickable-hint' onClick={()=> this.handleOnClick()}>
                    hint
                </section>

            </section>
        )
    }
}

export default Oplosmatrix
