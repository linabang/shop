/* eslint-disable react/prop-types */
import User from '../../../assets/logo-shop.svg'
import s from '../header-button/header-button.module.css'

import React, { useState } from "react";

const HeaderButton = () => {
  const [isIcon, setIsIcon] = useState(false);
  const handleClick = () => {
    setIsIcon(true);
  };
  return (
    <div>
      <div onClick={handleClick}>
      {isIcon ? (
        <img className={s.button__img} url={User} ></img>
      ) : (
        <button className={s.button}>Войти</button>
        
      )}
      </div>
    </div>
  )
}


export default HeaderButton