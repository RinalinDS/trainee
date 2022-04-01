import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Photos} from '../Photos/Photos';

export const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={'/404'}
                   element={<div style={{display: 'flex', alignItems: 'center', justifyContent: "center"}}>SOMEONE
                       FUCKED UP</div>}/>
            <Route path={'placeholder'} element={<Photos/>}/>
            <Route path={'/'} element={<Photos/>}/>
            <Route path={'omdb'} element={<div>maintaining</div>}/>
            <Route path={'*'} element={<Navigate to={'/404'}/>}/>

        </Routes>
    );
};

