import React, { useContext, useEffect, useReducer, useState } from 'react'

import Header from '../../components/Header'
import Modal from '../../components/Modal'
import { Context } from '../../providers/contexts/context'
import api from '../../providers/services/api'
import formReducer from '../../utils/forms'
import CoursesForm from './components/CoursesForm'
import CoursesTable from './components/CoursesTable'

export default function CoursesPage() {
  const { token } = useContext(Context)
  const [formData, setFormData] = useReducer(formReducer)

  const [show, setShow] = useState(false)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    if (!token) {
      return
    }

    api
      .token(token)
      .getCourses()
      .then((response) => setCourses(response))
  }, [token])

  const handleLoadForm = (data) => {
    setFormData({ reset: true, states: { ...data } })
    setShow(true)
  }

  const handleResetForm = () => {
    setFormData({ reset: true })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (formData.id) {
      api
        .putCourse(formData.id, formData)
        .then((response) => {
          const idx = courses.findIndex((i) => i.id === formData.id)
          const copy = [...courses]
          copy[idx] = formData

          setCourses(copy)
        })
        .finally(() => {
          handleResetForm()
          setShow(false)
        })
    } else {
      api
        .postCourse(formData)
        .then((response) => {
          formData.id = response.id
          setCourses((prev) => [formData, ...prev])
        })
        .finally(() => {
          handleResetForm()
          setShow(false)
        })
    }
  }

  const handleRemoveInstance = ({ id }) => {
    if (!id) {
      return
    }

    api.deleteCourse(id).then((response) => {
      if (!response.success) {
        return
      }

      setCourses((prev) => prev.filter((i) => i.id !== id))
    })
  }

  return (
    <React.Fragment>
      {/* Header */}
      <Header title="Courses" subtitle="Manage courses">
        <button
          className="btn btn-sm btn-primary d-flex align-items-center gap-1"
          onClick={() => setShow(true)}
        >
          <small>New</small>
          <i className="bx bxs-plus-square"></i>
        </button>
      </Header>

      {/* Table */}
      <CoursesTable
        courses={courses}
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
        <CoursesForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmitForm}
        />
      </Modal>
    </React.Fragment>
  )
}
