import { useContext, useReducer } from 'react'

import { Context } from '../../providers/contexts/context'
import api from '../../providers/services/api'
import formReducer, { handleFormChange } from '../../utils/forms'

export default function LoginPage() {
  const { handleLogin } = useContext(Context)

  const [formData, setFormData] = useReducer(formReducer)

  const onSubmit = (e) => {
    e.preventDefault()

    api.login(formData.username, formData.password).then((response) => {
      if (response.success) {
        handleLogin(response)
      }
    })
  }

  return (
    <div className="d-flex flex-column gap-5 align-items-center h-100 py-4">
      <h1 className="display-5">Attendances</h1>
      <h4 className="text-secondary fw-light">Welcome to Attendances</h4>

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label text-secondary">
            Username
          </label>
          <input
            id="username"
            name="username"
            className="form-control"
            required={true}
            value={formData?.username || ''}
            onChange={(e) => handleFormChange(setFormData, e)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="form-label text-secondary">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            required={true}
            value={formData?.password || ''}
            onChange={(e) => handleFormChange(setFormData, e)}
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-secondary">Enter</button>
        </div>
      </form>
    </div>
  )
}
