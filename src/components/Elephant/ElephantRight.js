import React from 'react'
import ruimteschipRechts from '../../img/ruimteschipRechts.jpg'
import arrowLeft from '../../img/arrowLeft.png'
import { useNavigate } from "react-router-dom";

const ElephantRight = () => {

  const navigate = useNavigate();

  const goLeft = () => {
    navigate("/elephantEntry")
}

  return (
    <div className="background">
        <img className="elephant-right" src={ruimteschipRechts}/>
        <img className="arrow-left" src={arrowLeft} onClick={goLeft}/>
    </div>
  )
}

export default ElephantRight