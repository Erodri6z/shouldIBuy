// import { useState } from 'react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/landing'

function App() {

  return (
    <>
    <Routes>
      <Route 
        path="/"
        element={<Landing />}
      />
    </Routes>
    </>
  )
}

export default App
