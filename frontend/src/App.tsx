

import SideBar from './components/SideBar'
import Header from './components/Header'
import DashBoard from './pages/DashBoard'
import About from './pages/About'
import Students from './pages/Students'

import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1, padding: "1rem", overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

