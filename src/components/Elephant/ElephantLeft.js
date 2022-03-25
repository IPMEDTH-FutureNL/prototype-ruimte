import React, {useState} from 'react'
import Modal from 'react-modal';
import ModalNotes from './ModalQuestions';
import ModalQuestions from './ModalNotes';
import elephantLeft from '../../img/elephantLeft.png'
import arrowRight from '../../img/arrowRight.png'
import closedScroll from '../../img/closedScroll.png'
import { useNavigate } from "react-router-dom";

const ElephantLeft = () => {

  const navigate = useNavigate();

  const [modalIsOpenQ, setModalIsOpenQ] = useState(false);
  const [modalIsOpenN, setModalIsOpenN] = useState(false);

    const scrollNotes =()=>{
        setModalIsOpenN(true)
    }

    const scrollNotesFalse =()=>{
        setModalIsOpenN(false)
    }

    const scrollQuestions = () => {
        setModalIsOpenQ(true)
      }
    
      const scrollQuestionsFalse = () => {
        setModalIsOpenQ(false)
      }

  const goRight = () => {
    navigate("/elephantEntry")
  }

  

  return (
    <div className="background">
        <img className="elephant-right" src={elephantLeft}/>
        <img className="arrow-right" src={arrowRight} onClick={goRight}/>
        <img className="scroll-notes" src={closedScroll} onClick={scrollNotes}/>
        <img className="scroll-questions" src={closedScroll} onClick={scrollQuestions}/>
        <Modal isOpen={modalIsOpenQ}>
            <button onClick={scrollQuestionsFalse}>x</button>
            <ModalQuestions/>
        </Modal>
        <Modal isOpen={modalIsOpenN}>
            <button onClick={scrollNotesFalse}>x</button>
            <ModalNotes/>
        </Modal>
    </div>
  )
}

export default ElephantLeft