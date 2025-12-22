import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Parent from './views/Parent'
import Child from './views/Child'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Parent />} />
        <Route path='/child' element={<Child />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App