import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parent from './views/Parent';
import Child from './views/Child';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/child" element={<Child />} />
      </Routes>
    </Router>
  )
}

export default App