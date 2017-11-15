import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='Abs-float AppFooter'>
      <ul className='nav'>
        <li>
          <NavLink exact to='/'>首页</NavLink>
        </li>
        <li>
          <NavLink to='/newtopic'>发表</NavLink>
        </li>
        <li>
          <NavLink to='/messages'>消息</NavLink>
        </li>
        <li>
          <NavLink to='/userhome'>我的</NavLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
