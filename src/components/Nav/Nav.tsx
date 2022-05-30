import React from 'react';
import s from './style/Nav.module.scss'

export const Nav = () => {
  return (
    <div className={s.container}>
      <div className={s.themeContainer}/>
      <div className={s.navContainer}/>
    </div>
  );
};

