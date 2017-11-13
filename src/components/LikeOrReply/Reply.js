import React from 'react'

const Reply = (reply = true) => {
  return reply && <div><textarea /> <button>提交</button></div>
}

export default Reply
