import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import "./Product.css";
import Card from '../components/Card';
 function Product({result}) {
  return (
  
    <>
    <section className='card-container'>
      {result}
      
       
    </section>
    </>
  )
}


export default Product;
