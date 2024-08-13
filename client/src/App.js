import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
