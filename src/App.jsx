import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./contact/Contact"
import Tarif from "./tarif/Tarif"



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
