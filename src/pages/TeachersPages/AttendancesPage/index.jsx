import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Context } from '../../../providers/contexts/context'
import api from '../../../providers/services/api'
import formReducer from '../../../utils/forms'
import AttendanceCard from './AttendanceCard'
import AttendanceForm from './AttendanceForm'

export default function AttendancesPage() {
  const { token } = useContext(Context)
  const { class_id } = useParams()

  const [date, setDate] = useState(new Date().toISOString().substring(0, 10))
  const [attendances, setAttendances] = useState([])

  useEffect(() => {
    api.token(token).getAttendances(class_id, date).then(setAttendances)
  }, [date])

  const handleSubmitCard = async (attendance, attended) => {
    api
      .postAttendance(class_id, {
        student_id: attendance.student_id,
        date,
        attended
      })
      .then((response) => {
        setAttendances((prev) =>
          prev.map((a) => {
            if (a.student_id === attendance.student_id) {
              a.id = response.id
              a.attended = attended
            }

            return a
          })
        )
      })
  }

  return (
    <React.Fragment>
      <header className="d-flex align-items-center justify-content-between gap-2">
        <div>
          <h2 className="fs-1 mb-0">Attendances</h2>
          <p className="text-muted small">Attendances</p>
        </div>
      </header>

      <AttendanceForm
        className="sticky-top mb-4 p-2 rounded bg-white shadow-sm"
        date={date}
        setDate={setDate}
      />

      <div className="d-flex flex-column gap-2">
        {attendances.map((a) => (
          <AttendanceCard
            key={a.student_id}
            attendance={a}
            handleSubmit={handleSubmitCard}
          />
        ))}
      </div>
    </React.Fragment>
  )
}
