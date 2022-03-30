import React from 'react'
import { useNavigate } from "react-router-dom";


import ruimteschipBegin from '../../img/ruimteschipBegin.jpg'


const ElephantEnd = () => {

    const navigate = useNavigate(); 

    const wrong = () => {

        alert('Dat is niet de juiste voedsel!')
    }

    const right = () => {
        navigate("/oplosmatrixIntro") 

    }

  return (
    <div className="background absolute">
        <img className="elephant-end" src={ruimteschipBegin}/>
        <section className="elephant-food">
            <h2>Goed, je hebt de gegevens! </h2>
            <h2>schakel nu de computer van het ruimteschip uit</h2>
            <ul className="elephant-food-list">
                <li className="elephant-food-listitem" onClick={wrong}>Stekker eruit halen</li>
                <li className="elephant-food-listitem" onClick={right}>Uit knop drukken</li>
                <li className="elephant-food-listitem" onClick={wrong}>Scherm dichtklappen</li>
            </ul>
        </section>
    </div>
  )
}

export default ElephantEnd