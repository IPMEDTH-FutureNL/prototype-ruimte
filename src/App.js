import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Start from './components/gameplay/Start';
import OvergangPuzzelEen from './components/gameplay/OvergangPuzzelEen';
import DragAndDrop from './components/puzzels/DragAndDrop';
import Oplosmatrix from './components/oplosmatrix/Oplosmatrix';
import OplosmatrixLock from './components/oplosmatrix/OplosmatrixLock';
import OplosmatrixNote from './components/oplosmatrix/OplosmatrixNotes';
import OverGangBurak from './components/gameplay/OverGangBurak';
import Ending from './components/gameplay/Ending';
import ElephantEntry from './components/Elephant/ElephantEntry';
import ElephantEnd from './components/Elephant/ElephantEnd';
import ElephantRight from './components/Elephant/ElephantRight';
import ElephantLeft from './components/Elephant/ElephantLeft';
import Oplosmatrix from './components/oplosmatrix/Oplosmatrix';
import OplosmatrixIntro from './components/oplosmatrix/OplosmatrixIntro';
import OplosmatrixLock from './components/oplosmatrix/OplosmatrixLock';
import OplosmatrixNote from './components/oplosmatrix/OplosmatrixNotes';
import OplosmatrixHint from './components/oplosmatrix/OplosmatrixHint';

  function App() {
   return(
     <Router>
       <div className="App">
        <Routes>
          <Route path="/" element ={<Start></Start>} />
          <Route path='/firstPuzzle' element={<OvergangPuzzelEen />} />
          <Route path='/puzzleMap' element={ <DragAndDrop />} />
          <Route path='/oplosmatrix' element ={<Oplosmatrix />} />
          <Route path='/oplosmatrixLock' element ={<OplosmatrixLock />} />
          <Route path='/oplosmatrixNote' element ={<OplosmatrixNote />} />
          <Route path="/overgangBurak" element={<OverGangBurak />} />
          <Route path='/elephantEntry' element={ <ElephantEntry />} />
          <Route path='/elephantRight' element={ <ElephantRight />} />
          <Route path='/elephantLeft' element={ <ElephantLeft />} />
          <Route path='/elephantEnd' element={ <ElephantEnd />} />
          <Route path='/oplosmatrixIntro' element={<OplosmatrixIntro />}/> 
          <Route path='/oplosmatrix' element ={<Oplosmatrix />} />
          <Route path='/oplosmatrixSlot' element ={<OplosmatrixLock />} />
          <Route path='/oplosmatrixHint' element ={<OplosmatrixHint />} />
          <Route path='/oplosmatrixBrief' element ={<OplosmatrixNote />} />
          <Route path='/end' element={ <Ending />} />
        </Routes>
       </div>
    </Router>
   )
}

export default App;
