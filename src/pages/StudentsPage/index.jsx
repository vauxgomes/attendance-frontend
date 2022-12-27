import React, { useContext, useEffect, useReducer, useState } from 'react'
import Header from '../../components/Header'

import Modal from '../../components/Modal'
import { Context } from '../../providers/contexts/context'
import api from '../../providers/services/api'
import formReducer from '../../utils/forms'
import StudentsForm from './components/StudentsForm'
import StudentsTable from './components/StudentsTable'

export default function StudentsPage() {
  const { token } = useContext(Context)
  const [formData, setFormData] = useReducer(formReducer)

  const [show, setShow] = useState(false)
  const [students, setStudents] = useState([])

  useEffect(() => {
    if (!token) {
      return
    }

    api
      .token(token)
      .getStudents()
      .then((response) => setStudents(response))
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
        .putStudent(formData.id, formData)
        .then((response) => {
          const idx = students.findIndex((i) => i.id === formData.id)
          const copy = [...students]
          copy[idx] = formData

          setStudents(copy)
        })
        .finally(() => {
          handleResetForm()
          setShow(false)
        })
    } else {
      api
        .postStudent(formData)
        .then((response) => {
          formData.id = response.id
          setStudents((prev) => [formData, ...prev])
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

    api.deleteStudent(id).then((response) => {
      if (!response.success) {
        return
      }

      setStudents((prev) => prev.filter((i) => i.id !== id))
    })
  }

  return (
    <React.Fragment>
      {/* Header */}
      <Header title="Students" subtitle="Manage students">
        <button
          className="btn btn-sm btn-primary d-flex align-items-center gap-1"
          onClick={() => setShow(true)}
        >
          <small>New</small>
          <i className="bx bxs-plus-square"></i>
        </button>
      </Header>

      {/* Table */}
      <StudentsTable
        students={students}
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
        <StudentsForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmitForm}
        />
      </Modal>
    </React.Fragment>
  )
}
