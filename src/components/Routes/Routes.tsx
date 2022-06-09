import React, {FC, ReactElement} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Start} from '../Start/Start';
import {Photos} from '../pages/Photos/Photos';
import {Omdb} from '../pages/omdb/omdb';
import {Weather} from '../pages/Weather/Weather';
import {TestComponent} from '../pages/TestComponent/TestComponent';
import DefaultPagination from '../pages/DefaultPagination/DefaultPagination';
import DynamicPagination from '../pages/DynamicPagination/DynamicPagination';
import NotFoundPage from '../pages/404/NotFoundPage';

export const RoutesComponent: FC = (): ReactElement => (
  <>
    <Routes>
      <Route index element={<Start/>}/>
      <Route path={'placeholder'} element={<Photos/>}/>
      <Route path={'omdb'} element={<Omdb/>}/>
      <Route path={'weather'} element={<Weather/>}/>
      <Route path={'test'} element={<TestComponent/>}/>
      <Route path={'pagination'} element={<DefaultPagination/>}/>
      <Route path={'dynamic'} element={<DynamicPagination/>}/>
      <Route path={'*'} element={<Navigate to={'/404'}/>}/>
      <Route path={'/404'} element={<NotFoundPage/>}/>
    </Routes>
  </>
)
