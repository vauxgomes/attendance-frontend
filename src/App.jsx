import './App.css'

import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Topbar from './components/Topbar'
import AttendancesPage from './pages/AttendancesPage'
import LoginPage from './pages/LoginPage'
import UsersPage from './pages/UsersPage'
import ContextProvider, { Context } from './providers/contexts/context'

function Organizer() {
  const { token } = useContext(Context)

  if (!token) {
    return <LoginPage />
  }

  return (
    <React.Fragment>
      {/* Topbar */}
      <Topbar />

      {/* Pages */}
      <div className="container py-3">
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/attendances" element={<AttendancesPage />} />
        </Routes>
      </div>
    </React.Fragment>
  )
}

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Organizer />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}
