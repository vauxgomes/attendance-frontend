import React, { useState } from 'react'

import ActionsDropdown from '../../../../../components/ActionsDropdown'
import SearchBar from '../../../../../components/SearchBar'
import StatusTag from '../../../../../components/StatusTag'

export default function ClassesTable({
  data,
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
            <th>Name</th>
            <th>Teacher</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data
            .filter((o) => !search || o.name.toLowerCase().includes(search))
            .map((o, key) => (
              <tr key={key}>
                <td>{o.name}</td>
                <td>{o.user_name}</td>
                <td>
                  <StatusTag status={o.status} />
                </td>
                <td className="align-middle">
                  <div className="d-flex justify-content-end">
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
