import React, { useState } from 'react'
import { SubHeader } from '../../../../components/Header'

import { handleFormChange } from '../../../../utils/forms'

export default function SubjectsForm({
  formData,
  formLists,
  setFormData,
  handleSubmit
}) {
  const [show, setShow] = useState(false)

  return (
    <React.Fragment>
      <SubHeader
        title="Students Information"
        subtitle="Fill the necessary information"
      />

      <form className="row" onSubmit={handleSubmit}>
        {/* Course ID */}
        <div className="col-12 col-md-6 mb-2">
          <label htmlFor="course_id" className="form-label">
            Status
          </label>
          <select
            id="course_id"
            name="course_id"
            className="form-select"
            required={true}
            value={formData?.course_id || ''}
            onChange={(e) => handleFormChange(setFormData, e)}
          >
            <option value="" disabled={formData?.course_id}>
              Choose
            </option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>

        {/* Code */}
        <div className="col-12 col-md-3  mb-2">
          <label htmlFor="code" className="form-label">
            Code
          </label>
          <input
            id="code"
            name="code"
            type="text"
            className="form-control"
            min={5}
            max={20}
            required={true}
            value={formData?.code || ''}
            onChange={(e) => handleFormChange(setFormData, e)}
          />
        </div>

        {/* Name */}
        <div className="col-12 col-md-9 mb-2">
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
