import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer.tsx'
import Home from './pages/Home'
import Stories from './pages/Stories.tsx'
import Legends from './pages/Legends.tsx'
import Achievements from './pages/Achievements.tsx'
import Gallery from './pages/Gallery.tsx'
import './index.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen futuristic-gradient text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/legends" element={<Legends />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
