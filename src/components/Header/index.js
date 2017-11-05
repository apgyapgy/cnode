import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='AppNav'>
      <ul className='nav'>
        <li>
          <NavLink to='/' >
            全部
          </NavLink>
        </li>
        <li>
          <NavLink to='/' >
            精华
          </NavLink>
        </li>
        <li>
          <NavLink to='/' >
            分享
          </NavLink>
        </li>
        <li>
          <NavLink to='/' >
            问答
          </NavLink>
        </li>
        <li>
          <NavLink to='/' >
            招聘
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
