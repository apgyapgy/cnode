import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='AppFooter'>
      <ul className='nav'>
        <li>
          <NavLink to='/'>首页</NavLink>
        </li>
        <li>
          <NavLink to='/'>发表</NavLink>
        </li>
        <li>
          <NavLink to='/'>消息</NavLink>
        </li>
        <li>
          <NavLink to='/'>我的</NavLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
