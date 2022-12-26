import React, { createContext, useState } from 'react'

import { parseJwt } from '../../utils/token'

export const Context = createContext()

export default function ContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const [name, setName] = useState('')
  const [role, setRole] = useState('')

  const handleLogin = ({ token }) => {
    const payload = parseJwt(token)

    setToken(token)
    setName(payload.name)
    setRole(payload.role)

    localStorage.setItem('token', token)
    localStorage.setItem('name', payload.name)
    localStorage.setItem('role', payload.role)

    console.log('Login OK')
  }

  const handleLogout = () => {
    setToken('')
    setName('')
    setRole('')

    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('role')

    console.log('Logout OK')
  }

  return (
    <Context.Provider
      value={{ token, info: { name, role }, handleLogin, handleLogout }}
    >
      {children}
    </Context.Provider>
  )
}
