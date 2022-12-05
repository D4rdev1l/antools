import React, { useState } from 'react'

import { AiOutlineFolderAdd } from "react-icons/ai"
import { TiHeartFullOutline } from "react-icons/ti"

import './tool.scss'

const Tool = ({imgUrl, title, subTitle, discription, link}) => {

const [like, setLike] = useState(false)

function handleClick() {
  setLike(like => !like)
}

let toogleClassCheck = like ? 'liked' : '';
  return (
    <div className="tools-container-tool">
      <div className="tools-container-tool__heading">
        <img src={imgUrl} alt="" />
        <div className="tools-container-tool__heading-text">
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
      <div className="tools-container-tool__discription">
        <p>{discription}</p>
      </div>
      <div className="tools-container-tool__footer">
        <div className="tools-container-tool__footer-btn">
          <div className={`${toogleClassCheck} tools-container-tool__footer-btn__cover `} onClick={handleClick}>
            <TiHeartFullOutline className="tools-container-tool__footer-btn_icon"/>
          </div>
          <div className="tools-container-tool__footer-btn__cover">
            <AiOutlineFolderAdd className="tools-container-tool__footer-btn_icon"/>
          </div>
        </div>
        <p><a href={link}>Visit</a></p>
      </div>
    </div>
  )
}

export default Tool