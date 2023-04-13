import React from 'react'
import { Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="AboutUs">About</Link>
        <Link to="Contact">Contact</Link>
        <Link to="Pricing">Pricing</Link>
        <Link to="Login">Login</Link>
    </div>
  )
}

export default Navbar