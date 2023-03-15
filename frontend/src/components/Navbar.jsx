import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate= useNavigate()
  return (
    <div className='navbar'> 
      <div className='navContainer'>
        <Link to="/" style={{color:'inherit',textDecoration:'none'}}> 
        
     <span className='logo'> Hotel Booking</span>
        </Link>
      <div className='navItems'>
        <button className='navButton' onClick={()=>navigate('/login/register')} >Register</button>
        
        <button className='navButton'  onClick={()=>navigate('/login')}>Login</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar
