import React from 'react'
import scroll from '../../img/scroll.png'

const ModalNotes = () => {
  return (
    <section>
      <img className="scroll" src={scroll}/>
      <p class="scroll-notes-text">A = <span class="text-blue">1 </span> - <span class="text-red"> 5 </span> </p>
      <p class="scroll-notes-text">B = <span class="text-blue">2 </span> - <span class="text-red"> 6 </span> </p>
      <p class="scroll-notes-text">C = <span class="text-blue">3 </span> - <span class="text-red"> 7 </span> </p>
      <p class="scroll-notes-text">D = <span class="text-blue">4 </span> - <span class="text-red"> 8 </span> </p>
    </section>
  )
}

export default ModalNotes