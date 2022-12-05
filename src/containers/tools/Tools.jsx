import React from 'react'
import './tools.scss'

import { Tool } from '../../components'
import { Figma, Sketch, VSC, Notion, Slack, Invision } from './imports'

const Tools = () => {
    return (
        <div className="tools section__padding">
            <div className="tools-heading">
                <h1>Most Popular Tools</h1>
                <p>Tools for the best Designers and Developers most popularly used in the world</p>
            </div>
            <div className="tools-container">
                <Tool imgUrl={Figma} title="FIGMA" subTitle="Free" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Tool imgUrl={Sketch} title="Sketch" subTitle="Free & Paid" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Tool imgUrl={VSC} title="Visual Studio Code" subTitle="Free" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Tool imgUrl={Notion} title="Notion" subTitle="Free & Paid" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Tool imgUrl={Slack} title="Slack" subTitle="Free & Paid" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Tool imgUrl={Invision} title="Invision" subTitle="Free & Paid" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>
            <div className="tools-loadBtn">
                <p><a href="#">Load more</a></p>
            </div>
        </div>
    )
}

export default Tools