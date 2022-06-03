import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'
import styled from 'styled-components';

const StyledHeader = styled.div`
  a {
    color: ${(props) => props.theme.text};
  }
  &:active {
    color: #15b715;
  }


`


export const Header = () => {
  return (
    <StyledHeader className={styles.header}>
      <NavLink to={'/placeholder'}> Placeholder</NavLink>
      <NavLink to={'/omdb'}> OMDBApi</NavLink>
      <NavLink to={'/weather'}> Weather</NavLink>
      <NavLink to={'/test'}> TestComponent</NavLink>
      <NavLink to={'/pagination'}> DefaultPagination</NavLink>
      <NavLink to={'/dynamic'}> DynamicPagination</NavLink>

    </StyledHeader>
  );
};

