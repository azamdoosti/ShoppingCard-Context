import React, { useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'

const Header = () => {

  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu);
  }

  const styleMenu = {
    right: menu ? 0 : ' -100%'
  }


  return (
    <header>
      <div className='cart-icon'>
        <span>3</span>
        <Link to='/'>
          <FaShoppingBag />

        </Link>
      </div>
      <ul style={styleMenu}>
        <li> <Link to='/'>خانه</Link> </li>
        <li> <Link to='/products'>محصولات</Link> </li>
        <li> <Link to='/'>درباره ما</Link> </li>
        <li> <Link to='/'>تماس با ما</Link> </li>
        <li> <Link to='/'>ثبت نام / ورود </Link> </li>
        <li><img src={Close} width={30} alt='' className='menu' onClick={toggleMenu} /></li>
      </ul>
      <div className='logo'>
        <Link to='/'>TopLearn</Link>
      </div>
      <div className='menu' onClick={toggleMenu}>
        <img src={Menu} width={30} alt=''></img>
      </div>
    </header>

  )
}

export default Header
