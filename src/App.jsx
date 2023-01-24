import './App.css'

import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Topbar from './components/Topbar'
import FavoriteClassesPage from './pages/FavoriteClassesPage'
import LoginPage from './pages/LoginPage'
import ClassesPage from './pages/SettingsPages/ClassesPage'
import CoursesPage from './pages/SettingsPages/CoursesPage'
import StudentsPage from './pages/SettingsPages/StudentsPage'
import SubjectsPage from './pages/SettingsPages/SubjectsPage'
import UsersPage from './pages/SettingsPages/UsersPage'
import AttendancesPage from './pages/TeachersPages/AttendancesPage'
import TeacherClassesPage from './pages/TeachersPages/TeacherClassesPage'
import ContextProvider, { Context } from './providers/contexts/context'

function Organizer() {
  const { token, info } = useContext(Context)

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
          {['ROOT'].includes(info.role) && (
            <React.Fragment>
              <Route path="/users" element={<UsersPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/subjects" element={<SubjectsPage />} />
              <Route path="/classes" element={<ClassesPage />} />
            </React.Fragment>
          )}

          {['USER'].includes(info.role) && (
            <React.Fragment>
              <Route path="/classes" element={<TeacherClassesPage />} />
              <Route
                path="/attendances/:class_id"
                element={<AttendancesPage />}
              />
            </React.Fragment>
          )}
          
          <Route path="*" element={<FavoriteClassesPage />} />
        </Routes>
      </div>
    </React.Fragment>
  )
}

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
        <Routes>
          <Route path="*" element={<Organizer />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}
