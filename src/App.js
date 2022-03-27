import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Intro from './components/gameplay/Intro';
import Start from './components/gameplay/Start';
import OvergangPuzzelEen from './components/gameplay/OvergangPuzzelEen';
import DragAndDrop from './components/puzzels/DragAndDrop';
import Ending from './components/gameplay/Ending';
import ElephantEntry from './components/Elephant/ElephantEntry';
import ElephantEnd from './components/Elephant/ElephantEnd';
import ElephantRight from './components/Elephant/ElephantRight';
import ElephantLeft from './components/Elephant/ElephantLeft';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Intro />} />
          <Route path="/start" element={<Start></Start>} />
          <Route path='/firstPuzzle' element={<OvergangPuzzelEen />} />
          <Route path='/puzzleMap' element={ <DragAndDrop />} />
          <Route path='/elephantEntry' element={ <ElephantEntry />} />
          <Route path='/elephantRight' element={ <ElephantRight />} />
          <Route path='/elephantLeft' element={ <ElephantLeft />} />
          <Route path='/elephantEnd' element={ <ElephantEnd />} />
          <Route path='/end' element={ <Ending />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
