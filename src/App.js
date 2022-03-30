import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Start from './components/gameplay/Start';
import OvergangPuzzelEen from './components/gameplay/OvergangPuzzelEen';
import DragAndDrop from './components/puzzels/DragAndDrop';

import Oplosmatrix from './components/oplosmatrix/Oplosmatrix';
import OplosmatrixLock from './components/oplosmatrix/OplosmatrixLock';
import OplosmatrixNote from './components/oplosmatrix/OplosmatrixNotes';
import Ending from './components/gameplay/Ending';

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
          <Route path='/end' element={ <Ending />} />
        </Routes>
       </div>
    </Router>
   )
}

export default App;
