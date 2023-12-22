import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="side">
        <Sidebar />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
