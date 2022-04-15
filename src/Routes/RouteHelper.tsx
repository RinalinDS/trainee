import {Navigate, useRoutes} from 'react-router-dom';
import {Photos} from '../Photos/Photos';
import React from 'react';
import {Omdb} from '../omdb/omdb';
import {Weather} from '../Weather/Weather';
import {TestComponent} from '../ForTests/TestComponent';
import DefaultPagination from '../ForTests/DefaultPagination';
import DynamicPagination from '../ForTests/DynamicPagination';

export const RouteHelper = () => useRoutes([
    {path: "/home", element: <Photos/>},
    {path: "/placeholder", element: <Photos/>},
    {path: "/", element: <Photos/>}, {path: "/", element: <Photos/>},
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