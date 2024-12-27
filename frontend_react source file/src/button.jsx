import React from 'react'

function Button({id,content}) {
  return (
    <button id={id} className='mt-5'>{content}</button>
  )
}

export default Button