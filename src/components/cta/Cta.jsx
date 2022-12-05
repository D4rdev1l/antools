import React from 'react'

import './cta.scss'

const Cta = () => {
  return (
    <div className="cta section__padding">
        <div className="cta-heading">
            <h4>Become a contributor?</h4>
            <p>Join us and get tips & tricks to become a great Designer and Developer</p>
        </div>

        <div className="cta-input">
            <input type="text" placeholder="Enter your email..."/>
            <button type="button">Join Us</button>
        </div>
    </div>
  )
}



export default Cta