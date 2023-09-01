import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import ResetPassword from './ResetPassword'
import Register from './Register'

export default function Index() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='reset-password' element={<ResetPassword />} />
    </Routes>
  )
}
