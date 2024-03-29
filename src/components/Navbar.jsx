import React from 'react'
import { NavLink } from 'react-router-dom'

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
    </div>
  )
}

export default Navbar
