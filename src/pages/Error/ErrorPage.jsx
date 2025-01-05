import React from 'react'
import './ErrorPage.css'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
       <div className="error-container container">
      <h2>404</h2>
      <p>Bunday sahifa mavjud emas.</p>
      <NavLink to='/'>Bosh sahifaga qaytish</NavLink>
    </div>
    </div>
  )
}

export default ErrorPage
