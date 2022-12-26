import './styles.css'

import React, { useState } from 'react'

export default function ActionsDropdown({ actions, children }) {
  const [show, setShow] = useState(false)

  const callAction = (callback) => {
    setShow(false)

    if (callback) callback()
  }

  return (
    <div className={`action-dropdown ${show && 'show'}`}>
      <ul>
        <li tabIndex={0} onBlur={() => setShow(false)}>
          <i
            onClick={() => setShow(true)}
            className="bx bx-dots-vertical-rounded px-1"
          ></i>

          {actions && (
            <ul className={show ? 'show' : ''}>
              {actions.map((action, key) => (
                <React.Fragment key={key}>
                  <li
                    onClick={() => callAction(action.callback)}
                    className={!action?.callback ? 'disabled' : ''}
                  >
                    <span>{action.title}</span>
                    {action?.icon && <i className={action.icon}></i>}
                  </li>

                  {action?.divider && (
                    <li className="dropdown-divider">
                      <hr className="" />
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}
