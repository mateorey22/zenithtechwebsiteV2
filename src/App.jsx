import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import SmartFeatures from './pages/SmartFeatures';
import Blog from './pages/Blog';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';
import Demo from './pages/Demo';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/smart-features" element={<SmartFeatures />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
