import React from 'react'
import { useNavigate } from "react-router-dom";

const ModalLock = () => {

    const navigate = useNavigate();

    const checkValue = () => {
        const inputValue = document.getElementById("number").value;
        if(inputValue == 383){
            console.log('Code gekraakt!!!')   
            navigate("/elephantEnd")

        } else {
            alert('Jammer dat is niet de code :(')
            // Modal met foutmelding
        }
    }

  return (
    <section>
        <label htmlFor="lname">Oei, hij lijkt op slot. Wat zou de driecijferige code zijn?</label>
        <input type="number" id="number" name="number"/>
        <button onClick={checkValue}> Kraak de code</button>
    </section>
  )
}

export default ModalLock