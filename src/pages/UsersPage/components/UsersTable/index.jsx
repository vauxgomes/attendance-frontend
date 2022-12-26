import React, { useState } from 'react'

import ActionsDropdown from '../../../../components/ActionsDropdown'
import SearchBar from '../../../../components/SearchBar'
import StatusTag from '../../../../components/StatusTag'

export default function UsersTable({
  users,
  handleLoadForm,
  handleRemoveInstance
}) {
  const [search, setSearch] = useState()

  return (
    <React.Fragment>
      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} className="mb-5" />

      {/* Table */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>User</th>
            <th>Status</th>
            <th>Roles</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users
            .filter(
              (u) =>
                !search ||
                u.name.toLowerCase().includes(search) ||
                u.username.toLowerCase().includes(search)
            )
            .map((user, key) => (
              <tr key={key}>
                <td></td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <StatusTag status={user.status} />
                </td>
                <td className="text-capitalize">{user.role.toLowerCase()}</td>
                <td>
                  <div className="d-flex align-items-center justify-content-end">
                    <ActionsDropdown
                      actions={[
                        {
                          title: 'Edit',
                          icon: 'bx bxs-edit',
                          callback: () => handleLoadForm(user),
                          divider: true
                        },
                        {
                          title: 'Remove',
                          icon: 'bx bx-eraser',
                          callback: () => handleRemoveInstance(user)
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
