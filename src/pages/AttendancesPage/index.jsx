import React, { useEffect, useReducer, useState } from 'react'

import formReducer from '../../utils/forms'

import AttendanceCard from './AttendanceCard'
import AttendanceForm from './AttendanceForm'

export default function AttendancesPage() {
  const token = ''

  const [students, setStudents] = useState([])
  const [formData, setFormData] = useReducer(formReducer)
  const [formLists, setFormLists] = useReducer(formReducer)

  useEffect(() => {
    setStudents([{ id: 1, name: 'Cabral' }])
    setFormLists({
      name: 'classes',
      value: [
        { id: 1, name: 'Class 1' },
        { id: 2, name: 'Class 2' }
      ]
    })
  }, [token])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  const handleSubmitCard = async (student, direction) => {
    if (!direction) {
      return
    }

    const students_ = [...students]
    const idx = students_.findIndex((s) => s.id === student.id)
    students_[idx].present = direction >= 1

    setStudents(students_)
  }

  return (
    <React.Fragment>
      <header className="d-flex align-items-center justify-content-between gap-2">
        <div>
          <h2 className="fs-1 mb-0">Attendances</h2>
          <p className="text-muted small">Manage users and permissions</p>
        </div>
      </header>

      <AttendanceForm
        formData={formData}
        formLists={formLists}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />

      <div className="d-flex flex-column gap-2">
        {students.map((student) => (
          <AttendanceCard
            key={student.id}
            student={student}
            handleSubmit={handleSubmitCard}
          />
        ))}
      </div>
    </React.Fragment>
  )
}
