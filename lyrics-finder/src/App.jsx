import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar.jsx';
import Index from './components/layouts/Index.jsx';



function App() {
 

  return (
    <Router>
      <div className='py-[20px] min-h-[100vh] bg-gradient-to-r from-[rgb(2,0,36)] via-[rgba(9,9,121)] to-[rgba(0,212,255)]'>
          <Navbar />    
        <div className="container">
          <Routes>

            <Route exact path='/' Component={Index}/>
          </Routes>
          
        </div>
      </div>
    </Router>
  )
}

export default App
