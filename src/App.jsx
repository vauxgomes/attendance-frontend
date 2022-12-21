import './App.css'

import React from 'react'

import Topbar from './components/Topbar'
import UsersPage from './pages/UsersPage'
import AttendancesPage from './pages/AttendancesPage'

export default function App() {
  return (
    <React.Fragment>
      <Topbar />
      <div className="container py-3">
        {/* <UsersPage /> */}
        <AttendancesPage />
      </div>
    </React.Fragment>
  )
}
