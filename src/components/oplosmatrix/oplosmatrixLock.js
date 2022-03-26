//zoom in on lock
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OplosMatrixLock = () => {
    const navigate = useNavigate();
    
    const answerLock = 490;

    const solveLock = (e) =>{
        e.preventDefault();
        let codeString = handleSubmit();

        if (codeString == answerLock){
            console.log('gefeliciteerd')
            //navigate naar volgende pagina
        } else {
            console.log('jammer, probeer het nog maar een keer')
        }
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
        <section>
            <form onSubmit={solveLock}>
                <label htmlFor='lname'>Weer een slot!? wat zou dit moeten zijn?</label>
                <input className="number" index="1" type="number" min="0" max="9"></input>
                <input className="number" index="1" type="number" min="0" max="9"></input>
                <input className="number" index="1" type="number" min="0" max="9"></input>

                <input type="submit" value="Invoeren"></input>
            </form>
        </section>
    )
}

export default OplosMatrixLock