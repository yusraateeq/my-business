import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu=()=>{
    mobileMenu? setMobileMenu(false) :setMobileMenu (true)
  }

  return (
    <nav className={`container ${sticky? 'menu' : ''}`}>
      <img  src={logo} alt="" className='logo'/>
      <ul className={mobileMenu ? '':'hide-on-mobile'}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#campus">Campus</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><button className='button'><a href="#contact">Contact</a></button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu}/>
    </nav>
  )
}

export default Navbar
