import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import Header from "./companents/Header"
import Home from "./pages/Home.jsx"
import Contact from "./contact/Home.jsx"
import Tarif from "./tarif/Home.jsx"




function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tarif' element={<Tarif/>} />
          <Route path='/contact' element={<Contact/>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
