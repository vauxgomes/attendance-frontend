import React, { useContext, useEffect, useReducer, useState } from 'react'
import Header from '../../components/Header'

import Modal from '../../components/Modal'
import { Context } from '../../providers/contexts/context'
import api from '../../providers/services/api'
import formReducer from '../../utils/forms'
import UserForm from './components/UserForm'
import UsersTable from './components/UsersTable'

export default function UsersPage() {
  const { token } = useContext(Context)
  const [formData, setFormData] = useReducer(formReducer)

  const [show, setShow] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (!token) {
      return
    }

    api
      .token(token)
      .getUsers()
      .then((response) => setUsers(response))
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
        .putUser(formData.id, formData)
        .then((response) => {
          const idx = users.findIndex((i) => i.id === formData.id)
          const copy = [...users]
          copy[idx] = formData

          setUsers(copy)
        })
        .finally(() => {
          handleResetForm()
          setShow(false)
        })
    } else {
      api
        .postUser(formData)
        .then((response) => {
          formData.id = response.id
          setUsers((prev) => [formData, ...prev])
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

    api.deleteUser(id).then((response) => {
      if (!response.success) {
        return
      }

      setUsers((prev) => prev.filter((i) => i.id !== id))
    })
  }

  return (
    <React.Fragment>
      {/* Header */}
      <Header title="Users" subtitle="Manage users and permissions">
        <button
          className="btn btn-sm btn-primary d-flex align-items-center gap-1"
          onClick={() => setShow(true)}
        >
          <small>New</small>
          <i className="bx bxs-plus-square"></i>
        </button>
      </Header>

      {/* Table */}
      <UsersTable
        users={users}
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
        <UserForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmitForm}
        />
      </Modal>
    </React.Fragment>
  )
}
