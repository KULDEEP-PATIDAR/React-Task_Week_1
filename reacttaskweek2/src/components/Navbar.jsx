import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" end style={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to="/dashboard" style={navLinkStyle}>
        Dashboard
      </NavLink>
      <NavLink to="/profile" style={navLinkStyle}>
        Profile
      </NavLink>
    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
}

// This function lets you style active links differently
const navLinkStyle = ({ isActive }) => ({
  color: isActive ? '#00bcd4' : 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: isActive ? 'bold' : 'normal',
})

export default Navbar
