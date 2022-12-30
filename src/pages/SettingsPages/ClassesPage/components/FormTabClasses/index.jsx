import React from 'react'

import { handleFormChange } from '../../../../../utils/forms'

export default function FormTabClasses({
  data,
  lists,
  setFormData,
  handleSubmit
}) {
  return (
    <form className="row" onSubmit={handleSubmit}>
      {/* Subject ID */}
      <div className="col-12 mb-2">
        <label htmlFor="subject_id" className="form-label">
          Subject
        </label>
        <select
          id="subject_id"
          name="subject_id"
          className="form-select"
          required={true}
          disabled={true}
          value={data?.subject_id || ''}
          onChange={(e) => handleFormChange(setFormData, e)}
        >
          <option value="" disabled={data?.subject_id}>
            Choose
          </option>
          {lists.subjects &&
            lists.subjects.map((o, key) => (
              <option key={key} value={o.id}>
                {o.name}
              </option>
            ))}
        </select>
      </div>

      {/* User ID */}
      <div className="col-12 mb-2">
        <label htmlFor="user_id" className="form-label">
          Teacher
        </label>
        <select
          id="user_id"
          name="user_id"
          className="form-select"
          required={true}
          value={data?.user_id || ''}
          onChange={(e) => handleFormChange(setFormData, e)}
        >
          <option value="" disabled={data?.user_id}>
            Choose
          </option>
          {lists.users &&
            lists.users.map((o, key) => (
              <option key={key} value={o.id}>
                {o.name}
              </option>
            ))}
        </select>
      </div>

      {/* Name */}
      <div className="col-12 col-md-6 mb-2">
        <label htmlFor="name" className="form-label">
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
          required={true}
          value={data?.name || ''}
          onChange={(e) => handleFormChange(setFormData, e)}
        />
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
          value={data?.status || ''}
          onChange={(e) => handleFormChange(setFormData, e)}
        >
          <option value="" disabled={data?.status}>
            Choose
          </option>
          {lists.statuses.map((o, key) => (
            <option key={key} value={o.value}>
              {o.title}
            </option>
          ))}
        </select>
      </div>

      {/* Button */}
      <div className="col-12 mt-2">
        <button className="btn btn-primary me-2" type="submit">
          Save
        </button>
      </div>
    </form>
  )
}
