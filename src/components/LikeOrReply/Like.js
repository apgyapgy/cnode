// 此组件由轱辘大佬亲自命名。精神艾特轱辘大佬
import React from 'react'

const Like = (props) => {
  return (
    [<span onClick={props.TopicLike} key={1} >赞 {props.ups}</span>,
      <span onClick={props.TopicReply} key={2} >回复</span>]
  )
}
export default Like
