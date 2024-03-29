import React from 'react'
import './header.css'
import CTA from './CTA'
import Cat from '../../assets/me-formal.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Armando</h1>
        <h5 className="text-light">
          Software Developer
        </h5>
        <CTA></CTA>
        <HeaderSocials />
        <div className="me">
          <img src={Cat} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header