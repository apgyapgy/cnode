import React from 'react'

const Reply = ({ reply = true, placeholder, onChange, submit, style, value, defaultValue }) => {
  return reply && <div style={style}>
    <textarea className='Reply'
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    <button className='Reply-botton' onClick={submit}>提交</button>
  </div>
}

export default Reply
