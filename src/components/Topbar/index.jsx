import './styles.css'

export default function Topbar() {
  return (
    <header id="topbar">
      <div className="topbar container">
        <img src="/img/logo-arrow.svg" className="logo" />

        <ul>
          <li>
            <a href="#">Attendances</a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-cog"></i>
            </a>

            {/* Dropdown menu */}
            <ul>
              <li className="d-flex gap-2 align-items-start">
                <i className="bx bxs-user py-1"></i>
                <div className="d-flex flex-column">
                  <a href="#">Users</a>
                  <small className="d-none d-sm-block">Users management</small>
                </div>
              </li>
              <li className="d-flex gap-2 align-items-start">
                <i className="bx bxs-graduation py-1"></i>
                <div className="d-flex flex-column">
                  <a href="#">Courses</a>
                  <small className="d-none d-sm-block">
                    Courses management
                  </small>
                </div>
              </li>
              <li className="d-flex gap-2 align-items-start">
                <i className="bx bx-book-bookmark py-1"></i>
                <div className="d-flex flex-column">
                  <a href="#">Subjects</a>
                  <small className="d-none d-sm-block">
                    Subjects management
                  </small>
                </div>
              </li>
              <li className="d-flex gap-2 align-items-start">
                <i className="bx bx-group py-1"></i>
                <div className="d-flex flex-column">
                  <a href="#">Students</a>
                  <small className="d-none d-sm-block">
                    Students management
                  </small>
                </div>
              </li>
              <li className="d-flex gap-2 align-items-start">
                <i className="bx bxs-chalkboard py-1"></i>
                <div className="d-flex flex-column">
                  <a href="#">Classes</a>
                  <small className="d-none d-sm-block">
                    Classes management
                  </small>
                </div>
              </li>

              <li className="d-flex gap-2 align-items-start">
                <i className="bx bx-exit py-1"></i>
                <div className="d-flex flex-column">
                  <a href="#">Logout</a>
                  <small className="d-none d-sm-block">See you soon</small>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  )
}
