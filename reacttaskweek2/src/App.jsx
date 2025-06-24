import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
// import ProblemDetail from './components/ProblemDetail'
import UseQuestions from './components/UseQuestions'
import problems from './data/problems.json';


function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        
        
      </Routes>
      
      
    </div>
  )
}

export default App
