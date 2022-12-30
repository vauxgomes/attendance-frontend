import React, { useState } from 'react'

import ActionsDropdown from '../../../../../components/ActionsDropdown'
import SearchBar from '../../../../../components/SearchBar'
import StatusTag from '../../../../../components/StatusTag'

export default function StudentsTable({
  students,
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
            <th>Code</th>
            <th>Name</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {students
            .filter(
              (u) =>
                !search ||
                u.name.toLowerCase().includes(search) ||
                u.code.includes(search)
            )
            .map((o, key) => (
              <tr key={key}>
                <td></td>
                <td>{o.code}</td>
                <td>{o.name}</td>
                <td>
                  <StatusTag status={o.status} />
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-end">
                    <ActionsDropdown
                      actions={[
                        {
                          title: 'Edit',
                          icon: 'bx bxs-edit',
                          callback: () => handleLoadForm(o),
                          divider: true
                        },
                        {
                          title: 'Remove',
                          icon: 'bx bx-eraser',
                          callback: () => handleRemoveInstance(o)
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
