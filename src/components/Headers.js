import React from 'react'
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Headers = () => {

    const result = useSelector ((state)=>state.cartData)
    console.log("redux data in Header",result)
  return (
    <div className='header'>
      <div className='cart-data'>
        <Link  to='/cart'>
        <span className='cartCounter'>{result.length}</span>
        < AiOutlineShoppingCart className='carticon'/>
        </Link>
      </div>
    </div>
  )
}

export default Headers