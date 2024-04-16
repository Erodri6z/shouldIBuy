// import { useState } from 'react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/landing'
import Footer from './components/footer/footer'
import About from './pages/About/about'

function App() {

  return (
    <>
    <Routes>
      <Route 
        path="/"
        element={<Landing />}
      />
      <Route
        path='/about'
        element={<About />}
      />
    </Routes>
    <Footer />
    </>
  )
}

export default App
