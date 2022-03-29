import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Intro from './components/gameplay/Intro';
import Start from './components/gameplay/Start';
import OvergangPuzzelEen from './components/gameplay/OvergangPuzzelEen';
import DragAndDrop from './components/puzzels/DragAndDrop';
import OverGangBurak from './components/gameplay/OverGangBurak';
import Ending from './components/gameplay/Ending';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Intro />} />
          <Route path="/start" element={<Start></Start>} />
          <Route path='/firstPuzzle' element={<OvergangPuzzelEen />} />
          <Route path='/puzzleMap' element={ <DragAndDrop />} />
          <Route path="/overgangBurak" element={<OverGangBurak />} />
          <Route path='/end' element={ <Ending />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
