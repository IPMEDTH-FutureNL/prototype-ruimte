import React from 'react'
import elephantRight from '../../img/elephantRight.png'
import arrowLeft from '../../img/arrowLeft.png'
import { useNavigate } from "react-router-dom";

const ElephantRight = () => {

  const navigate = useNavigate();

  const goLeft = () => {
    navigate("/elephantEntry")
}

  return (
    <div className="background">
        <img className="elephant-right" src={elephantRight}/>
        <img className="arrow-left" src={arrowLeft} onClick={goLeft}/>
    </div>
  )
}

export default ElephantRight