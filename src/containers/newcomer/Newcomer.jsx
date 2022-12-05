import React from 'react'
import { Tool } from '../../components'

import './newcomer.scss'

import { zeplin, phpstorm, toolbox, procreate } from './imports'

const Newcomer = () => {
  return (
    <div className="newcomer section__padding">
        <div className="newcomer-heading">
            <h4>Newcomer Tools</h4>
            <p>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
            <p><a href="">Explore more</a></p>
        </div>
        <div className="newcomer-container">
            <Tool imgUrl={zeplin} title="Zeplin" subTitle="Free & Paid" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Tool imgUrl={phpstorm} title="PHPStorm" subTitle="Free" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Tool imgUrl={toolbox} title="Toolbox" subTitle="Free" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Tool imgUrl={procreate} title="Procreate" subTitle="Paid" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
    </div>
  )
}

export default Newcomer