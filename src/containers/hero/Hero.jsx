import React from 'react'
import './hero.scss'

import { facebook, instagram, twitter, search } from './imports'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className="hero section__padding" id="home">
      <div className="hero-content">
        <h1>Awesome tools for Designer & Developer.</h1>
        <p>Antool is a web collection of information on paid or free Design and Development tools</p>
        <div className="hero-content__input">
          <img src={search} alt="search" />
          <input type="text" placeholder="find more than 430+ tools..."/>
          <button type="button">Search</button>
        </div>
        <div className="hero-content__social">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <div className="hero-img">
        <img src={hero} alt="illustration" />
      </div>
    </div>
  )
}

export default Hero