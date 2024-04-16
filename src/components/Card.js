import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";

function Card({img,title,star,reviews,prevPrice,newPrice}) {
  return (
    <> 
    <section className='card'>
        <img src= {img} alt={title} className='card-img'/>
        <div className='card-details'>
          <h3 className='card-title'>Shoe</h3>
          <section className='card-reviwes'>
<IoStarSharp className='rating-star'/> <IoStarSharp className='rating-star'/> <IoStarSharp className='rating-star'/> 
<IoStarSharp className='rating-star'/> 
<span className='total-reviews'>{reviews}</span>
          </section>
          <section className='card-price'>
            <div className='price'>
              <del>{prevPrice}</del>{newPrice}
            </div>
            <div className='bag'>
<IoBag className='bag'/>
            </div>
          </section>
        </div>
      </section>
      
      </>
  )
}
export default Card;

