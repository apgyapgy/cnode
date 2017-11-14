import React from 'react'
import { NavLink } from 'react-router-dom'
const active = (match, location, data) => {
  return location.search === data
}
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
          <NavLink activeClassName='activeNav'
            isActive={(match, location) => active(match, location, '?tab=good')}
            to='/?tab=good'
          >
            精华
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNav'
            isActive={(match, location) => active(match, location, '?tab=share')}
            to='/?tab=share'
          >
            分享
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNav'
            isActive={(match, location) => active(match, location, '?tab=ask')}
            to='/?tab=ask'
          >
            问答
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNav'
            isActive={(match, location) => active(match, location, '?tab=job')}
            to='/?tab=job'
          >
            招聘
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNav'
            isActive={(match, location) => active(match, location, '?tab=dev')}
            to='/?tab=dev'
          >
            测试区
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
