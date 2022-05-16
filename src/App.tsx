import React from 'react';
import './App.css';
import {AppSecond} from './AppSecond';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Photos} from './Photos/Photos';
import {Omdb} from './omdb/omdb';
import {Weather} from './Weather/Weather';
import {TestComponent} from './ForTests/TestComponent';
import DefaultPagination from './ForTests/DefaultPagination';
import DynamicPagination from './ForTests/DynamicPagination';
import AppThird from './AppThird';
import {Header} from './components/Header/Header';
import NotFoundPage from './pages/404/NotFoundPage';


function App() {

  return (
    <>

      <Routes>
        <Route index element={<AppSecond/>}/>
        <Route path={'home'} element={<AppThird/>}/>
        <Route path={'placeholder'} element={<><Header/><Photos/></>}/>
        <Route path={'omdb'} element={<><Header/><Omdb/></>}/>
        <Route path={'weather'} element={<><Header/><Weather/></>}/>
        <Route path={'test'} element={<><Header/><TestComponent/></>}/>
        <Route path={'pagination'} element={<><Header/><DefaultPagination/></>}/>
        <Route path={'dynamic'} element={<><Header/><DynamicPagination/></>}/>
        <Route path={'*'} element={<Navigate to={'/404'}/>}/>
        <Route path={'/404'} element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;


