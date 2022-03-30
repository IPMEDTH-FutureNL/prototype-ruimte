import React, {useState} from 'react'
import Modal from 'react-modal';
import ModalNotes from './ModalQuestions';
import ModalQuestions from './ModalNotes';
import ruimteschipLinks from '../../img/ruimteschipLinks.jpg'
import arrowRight from '../../img/arrowRight.png'
import tablet from '../../img/tablet.png'
import { useNavigate } from "react-router-dom";
//import { tab } from '@testing-library/user-event/dist/tab';


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
        <img className="elephant-right" src={ruimteschipLinks}/>
        <img className="arrow-right" src={arrowRight} onClick={goRight}/>
        <img className="scroll-notes" src={tablet} onClick={scrollNotes}/>
        <img className="scroll-questions" src={tablet} onClick={scrollQuestions}/>
        <Modal className="modal-questions" isOpen={modalIsOpenQ}>
            <button onClick={scrollQuestionsFalse}>x</button>
            <ModalQuestions/>
        </Modal>
        <Modal className="modal-notes" isOpen={modalIsOpenN}>
            <button onClick={scrollNotesFalse}>x</button>
            <ModalNotes/>
        </Modal>
    </div>
  )
}

export default ElephantLeft