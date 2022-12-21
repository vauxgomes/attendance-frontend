import React, { useState } from 'react'
import Modal from '../../components/Modal'

import SearchBar from '../../components/SearchBar'
import StatusTag from '../../components/StatusTag'

const data = [
  {
    username: 'root',
    status: 'ACTIVE',
    permission: 'ROOT'
  },
  {
    username: 'admin',
    status: 'INACTIVE',
    permission: 'ADMINISTRATOR'
  },
  {
    username: 'professor',
    status: 'ACTIVE',
    permission: 'USER'
  }
]

export default function UsersPage() {
  const [show, setShow] = useState(false)

  return (
    <React.Fragment>
      <header className="d-flex align-items-center justify-content-between gap-2 mb-3">
        <div>
          <h2 className="fs-1 mb-0">Users</h2>
          <p className="text-muted small">Manage users and permissions</p>
        </div>
        <button
          className="btn btn-sm btn-primary d-flex align-items-center gap-1"
          onClick={() => setShow(true)}
        >
          <small>New</small>
          <i className="bx bxs-plus-square"></i>
        </button>
      </header>

      <SearchBar className="mb-5" />

      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>User</th>
            <th>Status</th>
            <th>Permission</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((user, key) => (
            <tr key={key}>
              <td></td>
              <td>{user.username}</td>
              <td>
                <StatusTag status={user.status} />
              </td>
              <td className="text-capitalize">
                {user.permission.toLowerCase()}
              </td>
              <td>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} handleClose={() => setShow(false)}>
        <h5 className="mb-0">User Information</h5>
        <p className="small text-secondary">Fill the necessary information</p>

        <form className="row">
          {/* Username */}
          <div className="col-12 mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              name="username"
              className="form-control"
              type="text"
              required={true}
            />
          </div>

          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="form-select"
              disabled={true}
              required={true}
            >
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>

          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="permission" className="form-label">
              Permission
            </label>
            <select
              id="status"
              name="status"
              className="form-select"
              required={true}
            >
              <option value="ROOT">Root</option>
              <option value="ADMIN">Administrator</option>
              <option value="USER">Professor</option>
            </select>
          </div>

          <div className="col-12 mt-3">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  )
}
