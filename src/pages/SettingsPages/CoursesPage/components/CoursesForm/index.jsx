import React from 'react'

import { SubHeader } from '../../../../../components/Header'
import { handleFormChange } from '../../../../../utils/forms'

export default function CoursesForm({
  data,
  lists,
  setFormData,
  handleSubmit
}) {
  return (
    <React.Fragment>
      <SubHeader
        title="Course Information"
        subtitle="Fill the necessary information"
      />

      <form className="row" onSubmit={handleSubmit}>
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
    </React.Fragment>
  )
}
