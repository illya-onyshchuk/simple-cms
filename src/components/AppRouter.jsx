import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { publickRoutes } from '../router/routes';
import Loader from './Loader/Loader';

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {publickRoutes.map(route => 
          <Route 
            key={route.id}
            path={route.id}
            element={route.component}
            exact={route.expect}
          />
        )}
        <Route path='*' element={<Navigate to={'/dummyTable'}/>}/>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
