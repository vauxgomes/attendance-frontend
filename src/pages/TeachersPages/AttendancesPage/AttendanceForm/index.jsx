import { handleFormChange } from '../../../../utils/forms'

export default function AttendanceForm({ date, setDate, className }) {
  return (
    <div className={className}>
      <input
        type="date"
        name="date"
        className="form-control"
        required={true}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  )
}
