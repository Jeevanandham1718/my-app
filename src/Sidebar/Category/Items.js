import React from 'react'
import "./Category.css";
import Input from '../../components/Input';

  function Items({handlecHange}) {
  return (
    <div>
      <h5 className='sidebar-title-container'>Category</h5>
       <div>
         <label className='sidebar-label-container'>
<input type='radio' onChange={handlecHange} value="" name='test'/>
<span className='checkmark'>All</span>
</label>

<Input
handlechange={handlecHange}
value="sneakers"
title="sneakers"
name="test"


/>
<Input
handlechange={handlecHange}
value="falts"
title="falts"
name="test"


/>
<Input
handlechange={handlecHange}
value="sandals"
title="sandals"
name="test"


/>
<Input
handlechange={handlecHange}
value="Heals"
title="Heals"
name="test"


/>
 
         
       </div>
    </div>
     
  )
}

export default Items;
