import React, { useContext, useEffect, useReducer, useState } from 'react'

import Header from '../../../components/Header'
import Modal from '../../../components/Modal'
import { Context } from '../../../providers/contexts/context'
import api from '../../../providers/services/api'
import formReducer, { handleFormChange } from '../../../utils/forms'
import ClassesForm from './components/ClassesForm'
import ClassesTable from './components/ClassesTable'

export default function ClassesPage() {
  const { token } = useContext(Context)
  const [formData, setFormData] = useReducer(formReducer)

  const [show, setShow] = useState(false)
  const [users, setUsers] = useState([])
  const [students, setStudents] = useState([])
  const [classes, setClasses] = useState([])
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    if (!token) {
      return
    }

    api.token(token).getUsersList().then(setUsers)
    api.token(token).getStudentsList().then(setStudents)
    api.token(token).getSubjectsList().then(setSubjects)
  }, [token])

  useEffect(() => {
    if (!formData?.subject_id) {
      return
    }

    api.token(token).getClasses(formData.subject_id).then(setClasses)
  }, [formData?.subject_id])

  const handleLoadForm = (data) => {
    setFormData({ reset: true, states: { ...data } })
    setShow(true)
  }

  const handleResetForm = () => {
    setFormData({ reset: true, states: { subject_id: formData?.subject_id } })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (formData.id) {
      api
        .putClass(formData.subject_id, formData.id, formData)
        .then((response) => {
          const idx = classes.findIndex((i) => i.id === formData.id)
          const copy = [...classes]
          copy[idx] = formData

          setClasses(copy)
        })
        .finally(() => {
          handleResetForm()
          setShow(false)
        })
    } else {
      api
        .postClass(formData.subject_id, formData)
        .then((response) => {
          formData.id = response.id
          setClasses((prev) => [formData, ...prev])
        })
        .finally(() => {
          handleResetForm()
          setShow(false)
        })
    }
  }

  const handleRemoveInstance = ({ subject_id, id }) => {
    if (!id) {
      return
    }

    api.deleteClass(subject_id, id).then((response) => {
      if (!response.success) {
        return
      }

      setClasses((prev) => prev.filter((i) => i.id !== id))
    })
  }

  return (
    <React.Fragment>
      {/* Header */}
      <Header title="Classes" subtitle="Classes management">
        <div className="d-flex align-items-center gap-2">
          {/* Filter: Subject  */}
          <select
            id="subject_id"
            name="subject_id"
            className="form-select"
            required={true}
            value={formData?.subject_id || ''}
            onChange={(e) => handleFormChange(setFormData, e)}
          >
            <option value="" disabled={formData?.subject_id}>
              Choose a subject
            </option>
            {subjects &&
              subjects.map((o, key) => (
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
      <ClassesTable
        data={classes}
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
        <ClassesForm
          data={formData}
          lists={{
            users,
            subjects,
            students,
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
