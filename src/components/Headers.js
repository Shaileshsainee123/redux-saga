import React from 'react'
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';


const Headers = () => {

    const result = useSelector ((state)=>state.cartData)
    // console.log("redux data in Header",result)
    const dispatch = useDispatch();
  return (
    <div className='header'>

      <Link to='/'><h1 className="logo" > Taxon Shop</h1></Link>
      <div className='searchbar'>
        <input type='search' onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder ="Search Product" />
      </div>
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