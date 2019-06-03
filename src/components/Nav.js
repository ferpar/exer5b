import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../images/home.svg'

const Nav = () => (
 <nav className="home-nav bg-primary">
   <Link to="/">
    <img src={homeIcon} alt="home-icon"/>
  </Link>
 </nav>
)

export default Nav
