import React from 'react'

const IndexContent = (props) => {
  return (
    props.data.map((item, index) => {
      return (
        <li className='content-item' key={item.id}>
          <div>
            <div className='content-item-top' flex='flex'>
              <img src={item.author.avatar_url} alt='useravatar' />
              <div>
                <p>{item.author.loginname}</p>
                <time>时间</time>
                <span>{item.tab}</span>
              </div>
            </div>
            <div>
              <p>{item.title}</p>
            </div>
            <div flex='flex' className='content-item-reply'>
              <div>{item.visit_count}</div>
              <div>{item.reply_count}</div>
              <div>{item.reply_count}</div>
            </div>
          </div>
        </li>
      )
    })
  )
}
export default IndexContent
