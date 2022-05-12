import React from 'react';
import {NavLink} from 'react-router-dom';

export const AppSecond = () => {
  return (
    <div>
      <div style={{height: '100vh', width: '100wv', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <span>HELLO PLS CONSIDER CLICKING </span><NavLink to={'/home'}>
        <span style={{padding: '3px'}}>HERE</span></NavLink></div>
    </div>
  );
};

