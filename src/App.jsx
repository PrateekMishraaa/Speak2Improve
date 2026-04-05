import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Curriculum from './Pages/Curriculum'
import Register from './Pages/Register'
import Login from "./Pages/Login"
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'
const App = () => {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<ProtectedRoutes>
          <HomePage/>
        </ProtectedRoutes>}/>
        <Route path='/curriculum' element={<ProtectedRoutes>
          <Curriculum/>
        </ProtectedRoutes>}/>
        <Route path='/about' element={<ProtectedRoutes>
          <AboutPage/>
        </ProtectedRoutes>}/> 
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  </> 
  
)
}

export default App
