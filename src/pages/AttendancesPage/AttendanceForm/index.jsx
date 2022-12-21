import { handleFormChange } from '../../../utils/forms'

export default function AttendanceForm({
  formData,
  formLists,
  setFormData,
  handleSubmit
}) {
  return (
    <form className="row mt-2 mb-4" onSubmit={handleSubmit}>
      <div className="col-12 col-lg-6 mb-3">
        <select
          name="class_id"
          className="form-select"
          value={formData?.class_id || ''}
          onChange={(e) => handleFormChange(setFormData, e)}
          required={true}
        >
          {formLists?.classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-12 col-md-8 col-lg-4 mb-3">
        <input
          type="date"
          name="date"
          className="form-control"
          value={formData?.date || new Date().toISOString().substring(0, 10)}
          onChange={(e) => handleFormChange(setFormData, e)}
          required={true}
        />
      </div>

      <div className="col-12 col-md-4 col-lg-2 mb-3 d-grid">
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  )
}
