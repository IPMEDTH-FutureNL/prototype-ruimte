import React from 'react'
import { useNavigate } from "react-router-dom";

const ModalLock = () => {

    const navigate = useNavigate();

    const checkValue = () => {
        const inputValue = document.getElementById("number").value;
        if(inputValue == 817){
            console.log('Code gekraakt!!!')   
            navigate("/elephantEnd")

        } else {
            alert('Jammer dat is niet de code :(')
            // Modal met foutmelding
        }
    }

  return (
    <section className="modal-lock-section">
        <label className="modal-lock-section-label" htmlFor="lname">Oei, de computer heeft een wachtwoord. Wat zou de driecijferige code zijn?</label> <br/>
        <input className="modal-lock-section-el input" type="number" id="number" name="number"/> <br/>
        <button className="modal-lock-section-el btn" onClick={checkValue}> Kraak de code</button>
    </section>
  )
}

export default ModalLock