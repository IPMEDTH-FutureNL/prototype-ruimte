import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Start from './components/gameplay/Start';
import OvergangPuzzelEen from './components/gameplay/OvergangPuzzelEen';
import DragAndDrop from './components/puzzels/DragAndDrop';

import OplosmatrixLock from './components/oplosmatrix/oplosmatrixLock';


function App() {
 return(
   <Router>
     <div className="App">
      <Routes>
        <Route path="/" element ={<Start></Start>} />
        <Route path='/firstPuzzle' element={<OvergangPuzzelEen />} />
        <Route path='/puzzleMap' element={ <DragAndDrop />} />
        <Route path= '/oplosmatrix' element ={<OplosmatrixLock />} />
      </Routes>
     </div>
  </Router>
 )
}

export default App;
