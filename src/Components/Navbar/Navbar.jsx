import React from 'react'
import './navbar.css'
import Untitled from '../Image/Untitled.png'
function Navbar() {
  return (
    <div className='nav-section'>
        <div className='nav'>
            <div className="logo">
            <img src={Untitled} alt="error" />
            <span>Tender FMS</span>
            </div>
            <h1>Digital India Security Services India Limited</h1>
        </div>
    </div>
  )

}

export default Navbar