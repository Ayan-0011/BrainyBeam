import React from 'react'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import BusInformation from './Pages/BusInfomation'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/"  element={<><HomePage /></>}  />
            <Route path="/bus-info"  element={<><BusInformation /></>}  />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App