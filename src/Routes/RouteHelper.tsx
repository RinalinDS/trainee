import {Navigate, useRoutes} from 'react-router-dom';
import {Photos} from '../Photos/Photos';
import React from 'react';
import {Omdb} from '../omdb/omdb';

export const RouteHelper = () => useRoutes([
    {path: "/home", element: <Photos/>},
    {path: "/placeholder", element: <Photos/>},
    {path: "/", element: <Photos/>}, {path: "/", element: <Photos/>},
    {
        path: "/404", element: <div style={{display: 'flex', alignItems: 'center', justifyContent: "center"}}>SOMEONE
            FUCKED UP</div>
    },
    {path: "omdb", element: <Omdb />},
    {path: "*", element: <Navigate to={'/404'}/>},

]);