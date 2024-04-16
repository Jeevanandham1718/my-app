import React from 'react'

function Input({handlechange,value,title,name,color}) {
  return (
    <label className='sidebar-label-container'>
    <input onChange={handlechange}type='radio' name={name} value={value}/>
    <span className='checkmark' style={{backgroundColor:color}}></span>{title}
  </label>
  )
}

export default Input;

