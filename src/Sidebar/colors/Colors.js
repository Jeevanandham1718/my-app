import React from 'react'
import Input from '../../components/Input';

  function Colors({handlecHange}) {
  return (
    <div>
      <h5 className='sidebar-title-container'>Colors</h5>
      <label className='sidebar-label-container'>
<input type='radio' onChange={handlecHange} value="" name='test2'/>
<span className='checkmark'>All</span>
</label>
<Input
handlechange={handlecHange}
value="black"
title="black"
name="test1"
color="black"

/>
       
    </div>
  )
}

export default  Colors;
