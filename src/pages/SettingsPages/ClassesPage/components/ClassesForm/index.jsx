import React, { useContext, useEffect, useState } from 'react'

import { SubHeader } from '../../../../../components/Header'
import api from '../../../../../providers/services/api'
import FormTabClasses from '../FormTabClasses'
import FormTabStudents from '../FormTabStudents'

export default function ClassesForm({
  data,
  lists,
  setFormData,
  handleSubmit
}) {
  const [tab, setTab] = useState('class')
  const [classStudents, setClassStudents] = useState([])

  useEffect(() => {
    if (!data?.id) {
      return
    }

    api.getClassStudents(data.id).then(setClassStudents)
  }, [data?.id])

  const handleSetTab = (e) => {
    e.preventDefault()
    setTab(e.target.name)
  }

  return (
    <React.Fragment>
      <SubHeader
        title="Class Information"
        subtitle="Fill the necessary information"
      />

      <ul className="nav nav-tabs mb-2">
        <li className="nav-item">
          <a
            href="#"
            name="class"
            className={`nav-link ${tab === 'class' && 'active'}`}
            onClick={handleSetTab}
          >
            Class
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            name="students"
            className={`nav-link ${tab === 'students' && 'active'} ${
              !data?.id && 'disabled'
            }`}
            onClick={handleSetTab}
          >
            Students
          </a>
        </li>
      </ul>

      <div className="container overflow-auto">
        {!tab ||
          (tab === 'class' && (
            <FormTabClasses
              data={data}
              lists={lists}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
          ))}

        {tab === 'students' && (
          <FormTabStudents
            class_id={data.id}
            lists={lists}
            classStudents={classStudents}
            setClassStudents={setClassStudents}
          />
        )}
      </div>
    </React.Fragment>
  )
}
