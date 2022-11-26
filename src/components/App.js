import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Task from './Task'
import Home from './Home'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task' element={<Task />} />
      </Routes>
    </div>
  )
}

export default App


