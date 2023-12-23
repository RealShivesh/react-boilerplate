import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>
          <div className="container">
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
          </div>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
