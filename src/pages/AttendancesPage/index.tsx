import React, { useState } from 'react'

const data = [
  { id: 1, name: 'Student 1' },
  { id: 2, name: 'Student 2' },
  { id: 3, name: 'Student 3' },
  { id: 4, name: 'Student 4' }
]

export default function AttendancesPage() {
  return (
    <React.Fragment>
      <header className="d-flex align-items-center justify-content-between gap-2 mb-3">
        <div>
          <h2 className="fs-1 mb-0">Attendances</h2>
          <p className="text-muted small">Manage users and permissions</p>
        </div>
      </header>
    </React.Fragment>
  )
}
