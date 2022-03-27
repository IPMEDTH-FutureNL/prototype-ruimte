import React from 'react'
import scroll from '../../img/scroll.png'

const ModalQuestions = () => {
  return (
    <section>
      <img className="scroll" src={scroll}/>
      <section class="scroll-notes-text">
        <h2 class="text-white">Het slot zit wel erg goed op slot he?</h2>

        <p class="text-white">1. Hoeveel olifanten zitten er in dit verblijf?</p>

        <p class="text-blue">2. Hoe lang is een savanneolifant zwanger?</p>
        <ol class="text-blue">
          <li>A. 6 maanden</li>
          <li>B. 9 maanden</li>
          <li>C. 15 maanden</li>
          <li>D. 22 maanden</li>
        </ol>

        <p class="text-red">3. Hoeveel weegt een babyolifant?</p>
        <ol class="text-red">
          <li>A. 15-30 kilo</li>
          <li>B. 45-75kg</li>
          <li>C. 80-115 kilo</li>
          <li>D. 125-160 kilo</li>
        </ol>

        <p class="text-white"> <em>Google is je beste vriend</em> </p>
      </section>
    </section>
  )
}

export default ModalQuestions