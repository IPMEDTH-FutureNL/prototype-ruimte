//zoom in on lock
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/oplosmatrixLock.css';
import rocket from '../../img/rocket.png';
import ufo from '../../img/ufo.png';
import planet from '../../img/planet.png';

const OplosMatrixLock = () => {
    const navigate = useNavigate();
    
    const answerLock = 543;

    const solveLock = (e) =>{
        e.preventDefault();
        let codeString = handleSubmit();

        if (codeString == answerLock){
            console.log('gefeliciteerd')
            window.location.href = "/end"
        } else {
            alert('jammer, probeer het nog maar een keer')
        }
    }

    const returnMainScreen = () =>{
        navigate("/oplosmatrix")
    }
    
    const handleSubmit = (e) => {
        
        
        let inputs = document.getElementsByClassName('number')
        let lockCode = ""
        let codeString = ""

        for(var i = 0; i < inputs.length; i++){
            lockCode = inputs[i].value;
            codeString += lockCode.toString()
            //console.log(codeString)
        }
        return codeString
    }

    return(
        <section className='oplosmatrixLock'>
            <section className='containerLock'>
                <form className='containerForm' onSubmit={solveLock}>
                    <section className='containerNumber'>
                        <img className= 'ufo-lock' src={ufo}></img>
                        <input className="number" index="1" type="number" min="0" max="9"></input>
                        <img className='rocket-lock' src={rocket}/>
                        <input className="number" index="1" type="number" min="0" max="9"></input>
                        <img className='planet-lock' src={planet}/>
                        <input className="number" index="1" type="number" min="0" max="9"></input>
                    </section>
                    <input className='buttonSubmit' type="submit" value="Invoeren"></input>
            </form>

            </section>
            
            <button className='exitButton' onClick={returnMainScreen}>x</button>
        </section>
    )
}

export default OplosMatrixLock