import './styles.css'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { Context } from '../../providers/contexts/context'

import logo from '/img/logo-arrow.svg'

const menus = [
  {
    title: 'Users',
    subtitle: 'Users management',
    to: '/users',
    icon: 'bx bxs-user',
    roles: ['ROOT']
  },
  {
    title: 'Students',
    subtitle: 'Students management',
    to: '/students',
    icon: 'bx bx-group',
    roles: ['ROOT']
  },
  {
    title: 'Courses',
    subtitle: 'Courses management',
    to: '/courses',
    icon: 'bx bxs-graduation',
    roles: ['ROOT']
  },
  {
    title: 'Subjects',
    subtitle: 'Subjects management',
    to: '/subjects',
    icon: 'bx bx-book',
    roles: ['ROOT']
  },
  /*{
    title: 'Attendances',
    subtitle: 'Attendances maker',
    to: '/attendances',
    icon: 'bx bxs-user-check',
    roles: ['USER']
  },*/
  {
    title: 'Classes',
    subtitle: 'Classes management',
    to: '/classes',
    icon: 'bx bxs-chalkboard',
    roles: ['ROOT', 'USER']
  }
]

export default function Topbar() {
  const { info, handleLogout } = useContext(Context)

  return (
    <header id="topbar">
      <div className="topbar container">
        <NavLink to="/">
          <img src={logo} className="logo" />
        </NavLink>

        <ul>
          <li>
            <NavLink>
              <i className="bx bxs-cog"></i>
            </NavLink>

            {/* Dropdown menu */}
            <ul>
              {/* Menu */}
              {menus
                .filter((m) => m.roles.includes(info.role))
                .map((m, key) => (
                  <li key={key}>
                    <NavLink
                      to={m.to}
                      className="d-flex gap-2 align-items-start"
                    >
                      <i className={`${m.icon} text-secondary py-1`}></i>
                      <div className="d-flex flex-column">
                        <span>{m.title}</span>
                        <small className="d-none d-sm-block text-secondary">
                          {m.subtitle}
                        </small>
                      </div>
                    </NavLink>
                  </li>
                ))}
            </ul>
          </li>

          {/* Logout */}
          <li>
            <NavLink to="/" onClick={() => handleLogout()}>
              <i className="bx bx-exit"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
