import React from 'react'
import {FiHeart} from 'react-icons/fi'
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import "./Nav.css";

function Navigation() {
  return (
     <nav>
        <div className='nav-container'>
<input type='text' className='input-field' placeholder='Search your items...'/>
        </div>
        <div className='profile-container'>

<a href='#'>
    <FiHeart className="nav-icons"/>
</a>
<a href='#'>
    <CiShoppingCart className="nav-icons"/>
</a>
<a href='#'>
    <CiUser className="nav-icons"/>
</a>
        </div>

     </nav>
  )
}
export default Navigation;
