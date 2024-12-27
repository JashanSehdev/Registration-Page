import React from 'react'

function Input({type,id,label,onChange}) {
  return (
    <>
    <label htmlFor={id} className='mt-4'>{label}</label>
    <input type={type} id={id} onChange={onChange} className='mt-1 text-lg h-10' />
    </>
  )
}

export default Input