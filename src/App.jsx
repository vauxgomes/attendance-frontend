import './App.css'

import React from 'react'

import Topbar from './components/Topbar'
import UsersPage from './pages/UsersPage'
import AttendancesPage from './pages/AttendancesPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <React.Fragment>
      <LoginPage />
      
      {/* <Topbar /> */}
      <div className="container py-3">
        {/* <UsersPage /> */}
        {/* <AttendancesPage /> */}
      </div>
    </React.Fragment>
  )
}
