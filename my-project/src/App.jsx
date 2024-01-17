import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import './App.css'
import About from './Component/About'
import Skills from './Component/Skills'
import { data } from './data'
import Projects from './Component/Projects'
import Certificates from './Component/Certificates'
import Contact from './Component/Contact'
const App = () => {
 
  return (
    <>
    
        <Home/> 
         <About/>
         <Skills/>
         <Projects/>
         <Certificates/>
         <Contact/>
    </>
  )
}

export default App