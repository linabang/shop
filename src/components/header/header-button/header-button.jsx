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
      <button className={s.button} onClick={handleClick}>
      {isIcon ? (
        <img url={User} ></img>
      ) : (
        "Войти"
      )}
      </button>
    </div>
  )
}


export default HeaderButton