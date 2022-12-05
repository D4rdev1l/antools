import React from 'react'
import './brand.scss'

import { microsoft, google, slack, wordpress } from './imports'



const Brand = () => {
  return (
    <div className="brand section__margin">
        <h4>Trusted more than 150+ brand</h4>
        <div className="brand-img">
            <div>
                <img src={microsoft} alt="microsoft" /> 
            </div>
            <div>
                <img src={google} alt="google" /> 
            </div>
            <div>
                <img src={slack} alt="slack" /> 
            </div>
            <div>
                <img src={wordpress} alt="wordpress" /> 
            </div>
        </div>

    </div>
  )
}

export default Brand