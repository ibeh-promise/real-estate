import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';import './App.css'
// import * as motion from "motion/react-client"
import Home from './pages/Home';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
