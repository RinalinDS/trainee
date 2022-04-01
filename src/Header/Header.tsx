import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'

export const Header = () => {


    return (
        <div className={styles.header}>
            <NavLink to={'/placeholder'}> Placeholder</NavLink>
            <NavLink to={'/omdb'}> OMDBApi</NavLink>
        </div>
    );
};

