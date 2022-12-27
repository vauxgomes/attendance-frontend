import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../providers/contexts/context'
import './styles.css'

export default function Topbar() {
  const { handleLogout } = useContext(Context)

  return (
    <header id="topbar">
      <div className="topbar container">
        <img src="/img/logo-arrow.svg" className="logo" />

        <ul>
          <li>
            <NavLink to="/attendances">Attendances</NavLink>
          </li>
          <li>
            <NavLink>
              <i className="bx bxs-cog"></i>
            </NavLink>

            {/* Dropdown menu */}
            <ul>
              <li>
                <NavLink to="/users" className="d-flex gap-2 align-items-start">
                  <i className="bx bxs-user text-secondary py-1"></i>
                  <div className="d-flex flex-column">
                    <span>Users</span>
                    <small className="d-none d-sm-block text-secondary">
                      Users management
                    </small>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/students"
                  className="d-flex gap-2 align-items-start"
                >
                  <i className="bx bx-group text-secondary py-1"></i>
                  <div className="d-flex flex-column">
                    <span>Students</span>
                    <small className="d-none d-sm-block text-secondary">
                      Students management
                    </small>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className="d-flex gap-2 align-items-start"
                >
                  <i className="bx bxs-graduation text-secondary py-1"></i>
                  <div className="d-flex flex-column">
                    <span>Courses</span>
                    <small className="d-none d-sm-block text-secondary">
                      Courses management
                    </small>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/subjects"
                  className="d-flex gap-2 align-items-start"
                >
                  <i className="bx bx-book-bookmark text-secondary py-1"></i>
                  <div className="d-flex flex-column">
                    <span>Subjects</span>
                    <small className="d-none d-sm-block text-secondary">
                      Subjects management
                    </small>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className="d-flex gap-2 align-items-start"
                >
                  <i className="bx bxs-chalkboard text-secondary py-1"></i>
                  <div className="d-flex flex-column">
                    <span>Classes</span>
                    <small className="d-none d-sm-block text-secondary">
                      Classes management
                    </small>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className="d-flex gap-2 align-items-start"
                  onClick={() => handleLogout()}
                >
                  <i className="bx bx-exit text-secondary py-1"></i>
                  <div className="d-flex flex-column">
                    <span>Logout</span>
                    <small className="d-none d-sm-block text-secondary">
                      See you soon
                    </small>
                  </div>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  )
}
