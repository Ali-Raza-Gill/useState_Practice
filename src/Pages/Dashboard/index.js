import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from './Add'
import Edit from './Edit'
import Remove from './Remove'
import Update from './Update'
export default function index() {
  return (
    <Routes>
      <Route path='add' element={<Add />} />
      <Route path='edit' element={<Edit />} />
      <Route path='remove' element={<Remove />} />
      <Route path='update' element={<Update />} />

    </Routes>
  )
}
