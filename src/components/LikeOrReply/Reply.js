import React from 'react'

const Reply = ({ reply = true, defaultValue, onChange, submit }) => {
  return reply && <div>
    <textarea className='Reply'
      defaultValue={defaultValue}
      onChange={onChange}
    />
    <button className='Reply-botton' onClick={submit}>提交</button>
  </div>
}

export default Reply
