import React from 'react'
import tablet from '../../img/tablet.png'


const ModalQuestions = () => {
  return (
    <section>

      <img className="scroll" src={tablet}/>
      <section class="scroll-notes-text">
        <h2 class="text-black">De code is wel erg lastig he?</h2>

        <p class="text-black">1. Hoeveel planeten heeft ons zonnestelsel?</p>
        <ul class="text-black list">
          <li>A. 4 </li>
          <li>B. 8 </li>
        </ul>

        <p class="text-black">2. Welke planeet is het kleinste in ons zonnestelsel?</p>
        <ul class="text-black list">
          <li>A. Mercurius </li>
          <li>B. Venus </li>
          <li>C. Aarde </li>
        </ul>

        <p class="text-black">3. Welke planeet is het verst van de zon?</p>
        <ul class="text-black list">
          <li>A. Saturnus</li>
          <li>B. Jupiter</li>
          <li>C. Neptunus</li>
        </ul>

        <p class="text-black"> <em>Google is je beste vriend</em> </p>

      </section>
    </section>
  )
}

export default ModalQuestions