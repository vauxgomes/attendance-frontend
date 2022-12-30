import './styles.css'

import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Context } from '../../providers/contexts/context'
import api from '../../providers/services/api'

export default function FavoriteClassesPage() {
  const { token } = useContext(Context)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    api.token(token)
    api
      .getFavorites()
      .then(setFavorites)
      .catch(() => {})
  }, [token])

  return (
    <React.Fragment>
      {/* Empty */}
      {!favorites.length && (
        <h4 className="text-center text-secondary">
          You have no favorite classes
        </h4>
      )}

      {/* Cards */}
      <div className="favorites">
        {favorites.map((o, key) => (
          <Favorite key={key} favorite={o} />
        ))}
      </div>
    </React.Fragment>
  )
}

function Favorite({ favorite }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between gap-2">
          <NavLink
            className="fs-2 fw-bold m-0 text-decoration-none text-dark"
            to={`/attendances/${favorite.class_id}`}
          >
            {favorite.class_name}
          </NavLink>
          <i className="star bx bxs-star bx-sm"></i>
        </div>
      </div>
    </div>
  )
}
