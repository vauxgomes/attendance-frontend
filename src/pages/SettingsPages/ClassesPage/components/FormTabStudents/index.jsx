import React, { useState } from 'react'

import api from '../../../../../providers/services/api'

export default function FormTabStudents({
  class_id,
  lists,
  classStudents,
  setClassStudents
}) {
  const [student_id, setStudent] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    api
      .postClassStudent(class_id, { student_id })
      .then((response) => {
        const student = lists.students.find((s) => s.id == student_id)
        setClassStudents((prev) => [
          ...prev,
          {
            student_id: student.id,
            student_name: student.name,
            student_code: student.code
          }
        ])
      })
      .catch((err) => console.log(err.message))
  }

  const handleRemove = (student_id) => {
    api
      .deleteClassStudent(class_id, student_id)
      .then((response) => {
        setClassStudents((prev) =>
          prev.filter((s) => s.student_id != student_id)
        )
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <React.Fragment>
      <form className="row mb-4" onSubmit={handleSubmit}>
        {/* Subject ID */}
        <div className="col-12 mb-2">
          <label htmlFor="student_id" className="form-label">
            Student
          </label>
          <select
            id="student_id"
            name="student_id"
            className="form-select"
            required={true}
            value={student_id || ''}
            onChange={(e) => setStudent(e.target.value)}
          >
            <option value="">Choose</option>
            {lists.students &&
              lists.students.map((o, key) => (
                <option key={key} value={o.id}>
                  {o.name}
                </option>
              ))}
          </select>
        </div>

        <div className="col mt-1">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Student</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classStudents.map((o) => (
              <tr key={o.student_id}>
                <td>{o.student_code}</td>
                <td>{o.student_name}</td>
                <td className="text-end">
                  <button
                    className="btn-close small"
                    onClick={() => handleRemove(o.student_id)}
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
