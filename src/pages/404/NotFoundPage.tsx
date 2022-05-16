import React from 'react';
import s from './style/NotFoundPage.module.css'
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (

      <div className={s.main}>
        <span>SOMEONE FUCKED UP</span>
        <span>Let's go <Link to={'/home'}>home</Link></span>
      </div>


  );
};

export default NotFoundPage;