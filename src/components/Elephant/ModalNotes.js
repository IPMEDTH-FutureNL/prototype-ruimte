import React from 'react'
import tablet from '../../img/tablet.png'


const ModalNotes = () => {
  return (
    <section>

      <img className="scroll" src={tablet}/>
      <h2 class="scroll-notes-text"> Zet de antwoorden van vraag 2 en 3 hiermee om!</h2>
      <p class="scroll-notes-text">A = <span class="text-blue">1 + 1 </span> </p>
      <p class="scroll-notes-text">B = <span class="text-blue">2 + 3 </span> </p>
      <p class="scroll-notes-text">C = <span class="text-blue">3 + 1</span> </p>
      <p class="scroll-notes-text">D = <span class="text-blue">4 + 4</span> </p>
    </section>
  )
}

export default ModalNotes