import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'

export const Header = () => {


    return (
        <div className={styles.header}>
            <NavLink to={'/placeholder'}> Placeholder</NavLink>
            <NavLink to={'/omdb'}> OMDBApi</NavLink>
            <NavLink to={'/weather'}> Weather</NavLink>
            <NavLink to={'/test'}> TestComponent</NavLink>
            <NavLink to={'/pagination'}> DefaultPagination</NavLink>
            <NavLink to={'/dynamic'}> DynamicPagination</NavLink>
        </div>
    );
};

