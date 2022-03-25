import React, {useState} from 'react'
import Modal from 'react-modal';
import ModalLock from './ModalLock';
import '../../css/elephant.css';
import { useNavigate } from "react-router-dom";

import elephantEntry from '../../img/elephantEntry.png'
import lock from '../../img/lock.png'
import arrowRight from '../../img/arrowRight.png'

const ElephantEntry = () => {

    const navigate = useNavigate(); 

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const goRight = () => {
        navigate("/elephantRight")
    }

    const goLeft = () => {
        navigate("/elephantLeft")
    }

    const goBack = () => {
        navigate("/map")
        // MOET GEKOPPELD WORDEN AAN KAART VAN DANIQUE
    }
   
  return (
    <section>
        <div className="background">
            <img className="elephant-entry" src={elephantEntry}/>
            <img className="lock" onClick={setModalIsOpenToTrue} src={lock}/>
            <img className="arrow-right" src={arrowRight} onClick={goRight}/>
            <img className="arrow-left" src={arrowRight} onClick={goLeft}/>
            <img className="arrow-bottom" src={arrowRight} onClick={goBack}/>

            <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <ModalLock/>
            </Modal>
        </div>
    </section>
  )
}

export default ElephantEntry