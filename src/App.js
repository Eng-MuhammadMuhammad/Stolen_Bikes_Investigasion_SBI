import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Donate from './pages/Donate/Donate';
import StolenBikes from "./pages/StolenBikes/StolenBikes"
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/stolen-bike" element={<StolenBikes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes>
    </Router>
  );
}

export default App;