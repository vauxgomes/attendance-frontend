import React, { useState } from 'react'
import { SubHeader } from '../../../../components/Header'

import { handleFormChange } from '../../../../utils/forms'

export default function CoursesForm({ formData, setFormData, handleSubmit }) {
  const [show, setShow] = useState(false)

  return (
    <React.Fragment>
      <SubHeader
        title="Course Information"
        subtitle="Fill the necessary information"
      />

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
