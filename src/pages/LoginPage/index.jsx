export default function LoginPage({ setToken }) {
  const onSubmit = (e) => {
    e.preventDefault()
    setToken('12345')
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
          <input id="username" name="username" className="form-control" />
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
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-secondary">Enter</button>
        </div>
      </form>
    </div>
  )
}
