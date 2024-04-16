import React from 'react'
import "./Sidebar.css";
 
 
import Colors from './colors/Colors';
import Price from './Price/Price';
import Items from './Category/Items';
 

function Sidebar({handlecHange}) {
  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'>
            <h1>🛒</h1>
        </div>
           <Items handlecHange={handlecHange}/>
          <Price handlecHange={handlecHange}/>
        <Colors handlecHange={handlecHange}/>
    </section>
    
    </>
  )
}
export default Sidebar;
