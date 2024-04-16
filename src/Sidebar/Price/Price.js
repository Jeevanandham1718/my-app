import React from 'react'
import Input from '../../components/Input';

 function Price({handlecHange}) {
  return (
    <div>
    <h5 className='sidebar-title-container'>Price</h5>
    <div>
    <label className='sidebar-label-container'>
<input type='radio' onChange={handlecHange} value="" name='test2'/>
<span className='checkmark'>All</span>
</label>
<Input
handlechange={handlecHange}
value={100}
title="$0-$50"
name="test2"
/>
    </div>
  </div>
  )
}

export default Price;