import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import Header from './companents/Header'
import Home from './pages/Home'

import Contact from './contact/Home'
import Tarif from './tarif/Home'


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
