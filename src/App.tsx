import React, {FC, ReactElement, useEffect, useState} from 'react';
import styles from './App.module.scss';
import {Header} from './components/Header/Header';
import styled, {ThemeProvider} from 'styled-components';
import {Toggler} from './components/Toggler/Toggler';
import {darkTheme, GlobalStyles, lightTheme} from './components/common/styles/Global';
import {RoutesComponent} from './components/Routes/Routes';


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`


export const App: FC = (): ReactElement => {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const headerCN = `${styles.top} ${isDarkTheme ? styles.dark : styles.light}`
  const themeCN = isDarkTheme ? darkTheme : lightTheme

  return (
    <>
      <ThemeProvider theme={themeCN}>
        <GlobalStyles/>
        <AppWrapper>
          <div className={headerCN}>
            <Toggler value={isDarkTheme} onChange={toggleTheme}> <span style={{padding: '5px'}}>Dark</span></Toggler>
            <Header/>
          </div>
          <div className={styles.content}>
            <RoutesComponent/>
          </div>
        </AppWrapper>
      </ThemeProvider>
    </>
  )
}


