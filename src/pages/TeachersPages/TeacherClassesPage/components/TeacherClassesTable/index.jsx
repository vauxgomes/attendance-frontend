import React from 'react'
import { useNavigate } from 'react-router-dom'

import ActionsDropdown from '../../../../../components/ActionsDropdown'

export default function TeacherClassesTable({ data, handleFavorite }) {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      {/* Table */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <i className="star bx bxs-star"></i>
            </th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((o, key) => (
            <tr key={key}>
              <td style={{ width: '20px' }}>
                {o.favorite && <i className="star bx bxs-star"></i>}
              </td>
              <td>{o.name}</td>
              <td>
                <div className="d-flex align-items-center justify-content-end">
                  <ActionsDropdown
                    actions={[
                      {
                        title: 'Attendances',
                        icon: 'bx bxs-user-check',
                        callback: () => navigate(`/attendances/${o.id}`)
                      },
                      {
                        title: 'Favorite',
                        icon: 'bx bx-star',
                        callback: () => handleFavorite(o)
                      }
                    ]}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}
