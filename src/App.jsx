import {BrowserRouter as Router, Route, Routes, Link, Form} from 'react-router-dom'
import LeftBar from './components/left-bar/Left_Bar'

function App() {
  return (
    <>
    <Router>
      <LeftBar />

      <Routes>
        <Route exact path="/" element="" />
        
        <Route path="/item1" element={<p>item1</p>} />

        <Route path="/item2" element={<p>item2</p>} />

        <Route path="/item3" element={<p>item3</p>} />

      </Routes>
    </Router>

    </>
  )
}

export default App