import React, { useState } from 'react'

import { handleFormChange } from '../../../../utils/forms'

export default function UserForm({ formData, setFormData, handleSubmit }) {
  const [show, setShow] = useState(false)

  return (
    <React.Fragment>
      <h5 className="mb-0">User Information</h5>
      <p className="small text-secondary">Fill the necessary information</p>

      <form className="row" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="col-12 mb-2">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            required={true}
            value={formData?.name || ''}
            onChange={(e) => handleFormChange(setFormData, e)}
          />
        </div>

        {/* Username */}
        <div className="col-12 col-md-6  mb-2">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="form-control"
            min={5}
            max={20}
            required={true}
            value={formData?.username || ''}
            onChange={(e) => handleFormChange(setFormData, e)}
          />
        </div>

        {/* Password */}
        <div className="col-12 col-md-6 mb-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <div className="input-group">
            <input
              id="password"
              name="password"
              type={show ? 'text' : 'password'}
              className="form-control"
              min={5}
              required={!formData?.id}
              value={formData?.password || ''}
              onChange={(e) => handleFormChange(setFormData, e)}
            />

            <button
              className="btn btn-light border"
              onClick={() => setShow((prev) => !prev)}
            >
              <i className="bx bx-show-alt"></i>
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="col-12 col-md-6 mb-2">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="form-select"
            required={true}
            value={formData?.status || ''}
            onChange={(e) => handleFormChange(setFormData, e)}
          >
            <option value="" disabled={formData?.status}>
              Choose
            </option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>

        {/* Permission */}
        <div className="col-12 col-md-6 mb-2">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            id="role"
            name="role"
            className="form-select"
            required={true}
            value={formData?.role || ''}
            onChange={(e) => handleFormChange(setFormData, e)}
          >
            <option value="" disabled={formData?.role}>
              Choose
            </option>
            <option value="ROOT">Root</option>
            <option value="SUPER">Super</option>
            <option value="ADMIN">Administrator</option>
            <option value="USER">User</option>
          </select>
        </div>

        {/* Button */}
        <div className="col-12 mt-2">
          <button className="btn btn-primary me-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </React.Fragment>
  )
}
