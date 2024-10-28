import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar(){
  return (
    <div>
      <nav>
        <NavLink className={(e) => {
          return e.isActive ? 'active' : ""
        }} to="/"><li>Home</li> </NavLink>
        <NavLink className={(e) => {
          return e.isActive ? 'active' : ""
        }} to="/aboutus"><li>About Us</li></NavLink>
        <NavLink className={(e) => {
          return e.isActive ? 'active' : ""
        }} to="/user"><li>Profile</li></NavLink>
      </nav>
      
    </div>
  );
}

export default NavBar
