import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'

const Header = () => {
  return (
    <header>
      <div className='cart-icon'>
        <span>3</span>
        <Link to='/'>
          <FaShoppingBag />
        </Link>
      </div>
      <ul>
        <li> <Link to='/'>خانه</Link> </li>
        <li> <Link to='/'>محصولات</Link> </li>
        <li> <Link to='/'>درباره ما</Link> </li>
        <li> <Link to='/'>تماس با ما</Link> </li>
        <li> <Link to='/'>ثبت نام / ورود </Link> </li>
      </ul>
      <div className='logo'>
        <Link to='/'>TopLearn</Link>
      </div>
      <div className='menu'>
        <img src={Menu} width={30} alt=''></img>
      </div>
    </header>

  )
}

export default Header
