import React, { useContext, useEffect, useReducer, useState } from 'react'

import Header from '../../../components/Header'
import { Context } from '../../../providers/contexts/context'
import api from '../../../providers/services/api'
import TeacherClassesTable from './components/TeacherClassesTable'

export default function TeacherClassesPage() {
  const { token } = useContext(Context)

  const [classes, setClasses] = useState([])

  useEffect(() => {
    if (!token) {
      return
    }

    api
      .token(token)
      .getUserClasses()
      .then((response) => setClasses(response))
  }, [token])

  const handleFavorite = ({ id: class_id, favorite }) => {
    console.log(class_id, favorite)
    if (!class_id) {
      return
    }

    if (favorite) {
      api.deleteFavorite(class_id).then((response) => {
        setClasses((prev) =>
          prev.map((i) => {
            if (i.id == class_id) {
              i.favorite = false
            }

            return i
          })
        )
      })
    } else {
      api.postFavorite({ class_id }).then((response) => {
        setClasses((prev) =>
          prev.map((i) => {
            if (i.id == class_id) {
              i.favorite = true
            }

            return i
          })
        )
      })
    }
  }

  return (
    <React.Fragment>
      {/* Header */}
      <Header title="Classes" subtitle="Your assigned classes" />

      {/* Table */}
      <TeacherClassesTable data={classes} handleFavorite={handleFavorite} />
    </React.Fragment>
  )
}
