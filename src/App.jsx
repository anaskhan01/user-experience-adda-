import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Design from './Pages/Design/Design'
import Development from './Pages/Development/Development'
import Apps from './Pages/Apps/Apps'
import Tutorials from './Pages/Tutorials'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/design' element={<Design />} />
        <Route path='/development' element={<Development />} />
        <Route path='/app' element={<Apps />} />
        <Route path='/tutorials' element={<Tutorials />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
