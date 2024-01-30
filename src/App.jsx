import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Auth from './pages/Auth'
import Footer from './components/Footer'

function App() {
  const location = useLocation()
  const showNavbarPaths = ['/', '/about', '/auth']
  const showNavbar = showNavbarPaths.includes(location.pathname)

  return (
    <div className="body">
      {showNavbar && (
        <div className="navbar">
          <Navbar />
        </div>
      )}
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/auth" exact element={<Auth />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
