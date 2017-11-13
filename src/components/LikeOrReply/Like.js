// 此组件由轱辘大佬亲自命名。精神艾特轱辘大佬
import React from 'react'

const Like = (props) => {
  return (
    <div>
      <span onClick={props.TopicLike}>赞 {props.ups}</span>
      <span onClick={props.TopicReply}>回复</span>
    </div>
  )
}
export default Like
