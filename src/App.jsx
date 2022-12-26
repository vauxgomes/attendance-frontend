import './App.css'

import React, { useState } from 'react'

import Topbar from './components/Topbar'
import UsersPage from './pages/UsersPage'
import AttendancesPage from './pages/AttendancesPage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Organizer() {
  const [token, setToken] = useState(' ')

  if (!token) {
    return <LoginPage setToken={setToken} />
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
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Organizer />} />
      </Routes>
    </BrowserRouter>
  )
}
