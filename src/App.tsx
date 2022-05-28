import React, {FC, useEffect, useState} from 'react';
import styles from './App.module.scss';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Photos} from './Photos/Photos';
import {Omdb} from './omdb/omdb';
import {Weather} from './Weather/Weather';
import {TestComponent} from './ForTests/TestComponent';
import DefaultPagination from './ForTests/DefaultPagination';
import DynamicPagination from './ForTests/DynamicPagination';
import {Header} from './components/Header/Header';
import NotFoundPage from './pages/404/NotFoundPage';
import {Start} from './components/Start/Start';
import styled, {ThemeProvider} from 'styled-components';
import {Toggler} from './components/Toggler/Toggler';
import {darkTheme, GlobalStyles, lightTheme} from './Global';


const AppWrapper = styled.div<{ background?: boolean }>`
  width: 100%;
  min-height: 100vh;
`


export const App: FC = () => {
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


  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <AppWrapper>
        <div className={styles.top}>
          {/*<Flex direction={'row'} justify={'center'} align={'flex-start'}>*/}

          <Toggler value={isDarkTheme} onChange={toggleTheme}> {isDarkTheme ? 'Make Light' : ' Make Dark'} </Toggler>

          <Header/>
          {/*</Flex>*/}
        </div>
        <div className={styles.content}>
          <Routes>
            <Route index element={<Start/>}/>
            <Route path={'placeholder'} element={<Photos/>}/>
            <Route path={'omdb'} element={<Omdb/>}/>
            <Route path={'weather'} element={<Weather/>}/>
            <Route path={'test'} element={<TestComponent/>}/>
            <Route path={'pagination'} element={<DefaultPagination/>}/>
            <Route path={'dynamic'} element={<DynamicPagination/>}/>
            {/*<Route path={'placeholder'} element={<><Header/><Photos/></>}/>*/}
            {/*<Route path={'omdb'} element={<><Header/><Omdb/></>}/>*/}
            {/*<Route path={'weather'} element={<><Header/><Weather/></>}/>*/}
            {/*<Route path={'test'} element={<><Header/><TestComponent/></>}/>*/}
            {/*<Route path={'pagination'} element={<><Header/><DefaultPagination/></>}/>*/}
            {/*<Route path={'dynamic'} element={<><Header/><DynamicPagination/></>}/>*/}
            <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            <Route path={'/404'} element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </AppWrapper>
      </ThemeProvider>
    </>
  );
}


