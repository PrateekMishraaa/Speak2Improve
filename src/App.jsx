import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
const App = () => {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/> 
      </Routes>
    </Router>
  </> 
  
)
}

export default App
