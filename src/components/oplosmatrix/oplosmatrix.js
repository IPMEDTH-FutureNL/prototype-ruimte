//main page
import React, { Component } from 'react';
import '../../css/oplosmatrix.css';


export class Oplosmatrix extends Component{

    handleClickLock = () =>{
        window.location.href = '/oplosmatrixLock';
    }
    handleClickNote = () =>{
        window.location.href = '/oplosmatrixNote';
    }


    render(){
        return(
            <section className='oplosmatrix'>
                <section className='clickable-lock' onClick={()=> this.handleClickLock()}>
                
                </section>
                <section className='clickable-note' onClick={()=> this.handleClickNote()}>
                   
                </section>

            </section>
        )
    }
}

export default Oplosmatrix