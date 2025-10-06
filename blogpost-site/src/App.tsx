 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Blogpost from './components/Hero';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Single blog post page */}
        <Route path="/blog/:id" element={<Blogpost/>} />

        {/* Fallback route (optional) */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
