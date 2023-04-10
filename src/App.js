import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bait from './pages/Bait'
import Home from './pages/Home'
import './style/css/main.css'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bait' element={<Bait />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
