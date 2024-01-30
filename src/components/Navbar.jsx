import React from 'react'
import { NavLink } from 'react-router-dom'
import Clock from './Clock'

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink
        className={(navData) =>
          navData.isActive ? 'nav-menu active' : 'nav-menu'
        }
        to={'/'}
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? 'nav-menu active' : 'nav-menu'
        }
        to={'/about'}
      >
        About
      </NavLink>
      <Clock />
    </div>
  )
}

export default Navbar
