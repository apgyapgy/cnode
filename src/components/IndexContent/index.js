import React from 'react'
import { Tab } from '../index'
import { Link } from 'react-router-dom'
import 'moment/locale/zh-cn'
import moment from 'moment'
moment.locale('zh-cn')
const IndexContent = (props) => {
  return (
    props.data.map((item, index) => {
      return (
        <li className='content-item' key={index}>
          <Link to={`/topic/${item.id}`}>
            <div>
              <div className='content-item-top' flex='flex'>
                <img src={item.author.avatar_url} alt='useravatar' />
                <div className='content-item-user'>
                  <p>{item.author.loginname}</p>
                  <time>{moment(`${item.create_at}`).fromNow()}</time>
                  <Tab good={item.good} top={item.top} />
                </div>
              </div>
              <div>
                <p>{item.title}</p>
              </div>
              <div flex='flex' className='content-item-reply'>
                <div><span>{item.visit_count}</span></div>
                <div><i className='icon iconfont icon-xiaoxi' />{item.reply_count}</div>
                <div>{moment(`${item.last_reply_at}`).fromNow()}</div>
              </div>
            </div>
          </Link>
        </li>

      )
    })
  )
}
export default IndexContent
