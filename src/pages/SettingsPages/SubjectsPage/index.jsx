import React, { useContext, useEffect, useReducer, useState } from 'react'

import Header from '../../../components/Header'
import Modal from '../../../components/Modal'
import { Context } from '../../../providers/contexts/context'
import api from '../../../providers/services/api'
import formReducer, { handleFormChange } from '../../../utils/forms'
import SubjectsForm from './components/SubjectsForm'
import SubjectsTable from './components/SubjectsTable'

export default function SubjectsPage() {
  const { token } = useContext(Context)
  const [formData, setFormData] = useReducer(formReducer)

  const [show, setShow] = useState(false)
  const [courses, setCourses] = useState()
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    if (!token) {
      return
    }

    api
      .token(token)
      .getCoursesList()
      .then((response) => setCourses(response))
  }, [token])

  useEffect(() => {
    if (!formData?.course_id) {
      return
    }

    api
      .token(token)
      .getSubjects(formData.course_id)
      .then((response) => setSubjects(response))
  }, [formData?.course_id])

  const handleLoadForm = (data) => {
    setFormData({ reset: true, states: { ...data } })
    setShow(true)
  }

  const handleResetForm = () => {
    setFormData({ reset: true, states: { course_id: formData?.course_id } })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (formData.id) {
      api
        .putSubject(formData.course_id, formData.id, formData)
        .then((response) => {
          const idx = subjects.findIndex((i) => i.id === formData.id)
          const copy = [...subjects]
          copy[idx] = formData

          setSubjects(copy)
        })
        .finally(() => {
          handleResetForm()
          setShow(false)
        })
    } else {
      api
        .postSubject(formData.course_id, formData)
        .then((response) => {
          formData.id = response.id
          setSubjects((prev) => [formData, ...prev])
        })
        .finally(() => {
          handleResetForm()
          setShow(false)
        })
    }
  }

  const handleRemoveInstance = ({ course_id, id }) => {
    if (!id) {
      return
    }

    api.deleteSubject(course_id, id).then((response) => {
      if (!response.success) {
        return
      }

      setSubjects((prev) => prev.filter((i) => i.id !== id))
    })
  }

  return (
    <React.Fragment>
      {/* Header */}
      <Header title="Subjects" subtitle="Classes' subjects">
        <div className="d-flex align-items-center gap-2">
          {/* Filter: Course  */}
          <select
            id="course_id"
            name="course_id"
            className="form-select"
            required={true}
            value={formData?.course_id || ''}
            onChange={(e) => handleFormChange(setFormData, e)}
          >
            <option value="" disabled={formData?.course_id}>
              Choose a course
            </option>
            {courses &&
              courses.map((o, key) => (
                <option key={key} value={o.id}>
                  {o.name}
                </option>
              ))}
          </select>

          {/* New  */}
          <button
            className="btn btn-sm btn-primary d-flex align-items-center gap-1"
            onClick={() => setShow(true)}
          >
            <small>New</small>
            <i className="bx bxs-plus-square"></i>
          </button>
        </div>
      </Header>

      {/* Table */}
      <SubjectsTable
        data={subjects}
        handleLoadForm={handleLoadForm}
        handleRemoveInstance={handleRemoveInstance}
      />

      {/* Modal:Form */}
      <Modal
        show={show}
        handleClose={() => {
          handleResetForm()
          setShow(false)
        }}
      >
        <SubjectsForm
          data={formData}
          lists={{
            courses,
            statuses: [
              { title: 'Active', value: 'ACTIVE' },
              { title: 'Inactive', value: 'INACTIVE' }
            ]
          }}
          setFormData={setFormData}
          handleSubmit={handleSubmitForm}
        />
      </Modal>
    </React.Fragment>
  )
}
