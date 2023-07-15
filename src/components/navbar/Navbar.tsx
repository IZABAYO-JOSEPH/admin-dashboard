import React from 'react'
import "./Navbar.scss"
const Navbar = () => {
  return (
   <div className="navbar">
    <div className="logo">
      <h1>THE DASHBOARD</h1>
    </div>
    <div className="icons">
      <img src="/search.svg" alt="image"  className='icon' />
      <img src="/app.svg" alt="image"  className='icon' />
      <img src="/expand.svg" alt="image"  className='icon' />
      <div className="notification">
    <img src="/notifications.svg"alt="" className='icon' />
    <span>1</span>
      </div>
      <div className="user">
  <img src="https://avatars.githubusercontent.com/u/81755636?v=4" alt="" />
  <span>Joe</span>
      </div>
      <img src="/setting.svg" alt="" className='icon' />
    </div>
   </div>
  )
}

export default Navbar