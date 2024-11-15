/* eslint-disable react/prop-types */
import User from '../../../assets/image 9.svg'
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
      {!isIcon ? (
       <button className={s.button}>Войти</button>
      ) : (
        
         <img className={s.button__img} src={User} ></img>
      )}
      </div>
    </div>
  )
}


export default HeaderButton