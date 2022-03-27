import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Start from './components/gameplay/Start';
import OvergangPuzzelEen from './components/gameplay/OvergangPuzzelEen';
import DragAndDrop from './components/puzzels/DragAndDrop';

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
        <Route path='/oplosmatrixIntro' element={<OplosmatrixIntro />}/> 
        <Route path='/oplosmatrix' element ={<Oplosmatrix />} />
        <Route path='/oplosmatrixSlot' element ={<OplosmatrixLock />} />
        <Route path='/oplosmatrixHint' element ={<OplosmatrixHint />} />
        <Route path='/oplosmatrixBrief' element ={<OplosmatrixNote />} />
      </Routes>
     </div>
  </Router>
 )
}

export default App;
