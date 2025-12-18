import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from '../src/Components/Navbar';
import Aboutus from './Pages/Aboutus';
import Menu from './Pages/Menu'
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact'

function App() {
  return (
    <Router>
      <div>
         <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
           <Route path="/menu" element={<Menu />} />
           <Route path="/gallery" element={<Gallery/>} />
           <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;