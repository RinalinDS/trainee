import {Navigate, useRoutes} from 'react-router-dom';
import {Photos} from '../pages/Photos/Photos';
import React from 'react';
import {Omdb} from '../pages/omdb/omdb';
import {Weather} from '../pages/Weather/Weather';
import {TestComponent} from '../pages/TestComponent/TestComponent';
import DefaultPagination from '../pages/DefaultPagination/DefaultPagination';
import DynamicPagination from '../pages/DynamicPagination/DynamicPagination';


export const RouteHelper = () => useRoutes([
  {path: "/", element: <Photos/>},
  {path: "/home", element: <Photos/>},
  {path: "/placeholder", element: <Photos/>},
  {
    path: "/404", element: <div style={{display: 'flex', alignItems: 'center', justifyContent: "center"}}>SOMEONE
      FUCKED UP</div>
  },
  {path: "omdb", element: <Omdb/>},
  {path: "weather", element: <Weather/>},
  {path: "test", element: <TestComponent/>},
  {path: "pagination", element: <DefaultPagination/>},
  {path: "dynamic", element: <DynamicPagination/>},
  {path: "*", element: <Navigate to={'/404'}/>},

]);