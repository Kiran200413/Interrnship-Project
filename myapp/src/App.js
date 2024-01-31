import React from 'react'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Medical from './Medical'
import Navbar1 from './Navbar1'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Engineering from './Engineering'
import Agriculture from './Agriculture'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/engineering' element={<Engineering/>}/>
        <Route path='/medical' element={<Medical/>}/>
        <Route path='/agriculture' element={<Agriculture/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
