import { useState } from 'react'
import Container from './container'
import Table from './table'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" 
      element={<Container heading="REGISTER " />}
      />
      <Route path="/show"
      element={<Table/>}
      />
      </Routes>
    </Router>
  )
}

export default App
