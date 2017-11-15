import React from 'react'
import { Tab } from '../index'
import { Link } from 'react-router-dom'
import 'moment/locale/zh-cn'
import moment from 'moment'
moment.locale('zh-cn')
const IndexContent = (props) => {
  return (
    props.data.map((item, index) => {
      console.log(item)
      return (
        <li className='content-item' key={index}>
          <Link to={`/topic/${item.id}`}>
            <div>
              <div className='content-item-top flex'>
                <img src={item.author.avatar_url} alt='useravatar' />
                <p className='content-title'>{item.title}</p>
              </div>
              <div className='content-item-author flex'>
                <strong>· {item.author.loginname}</strong>
                <time>· 发表{moment(`${item.create_at}`).fromNow()}</time>
                <div>· {item.reply_count}次回复</div>
                <Tab good={item.good} top={item.top} />
              </div>
            </div>
          </Link>
        </li>

      )
    })
  )
}
export default IndexContent
