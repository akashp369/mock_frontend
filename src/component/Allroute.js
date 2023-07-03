import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Signup from './Signup'

export default function Allroute() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}
