import React from 'react';
import style from './Header.module.css';

function Header() {
  console.log(style);
  
  return (
    <header className={style.header}>Header</header>
  )
}

export default Header