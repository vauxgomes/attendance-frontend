import React, { useState } from 'react'
import SwipableCard from '../../components/SwipableCard'

const data = [
  { id: 1, name: 'Adi Pranay' },
  { id: 2, name: 'Máté Magdy' },
  { id: 3, name: 'Launce Bertók' },
  { id: 4, name: 'Dieudonné Gurutz' }
]

export default function AttendancesPage() {
  return (
    <React.Fragment>
      <header
        className="d-flex align-items-center justify-content-between gap-2"
        onMouseDown={() => console.log('Down')}
      >
        <div>
          <h2 className="fs-1 mb-0">Attendances</h2>
          <p className="text-muted small">Manage users and permissions</p>
        </div>
      </header>

      <h3 className="display-4 text-secondary mb-3">Class 1</h3>

      <div className="d-flex flex-column gap-2">
        {data.map((student) => (
          <SwipableCard key={student.id}>
            <div className="">
              <small className="text-secondary">Student</small>
              <h5>{student.name}</h5>
            </div>
          </SwipableCard>
        ))}
      </div>
    </React.Fragment>
  )
}
