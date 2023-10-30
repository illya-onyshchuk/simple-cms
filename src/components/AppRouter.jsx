import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Loader from './Loader/Loader';
import { tabs } from '../testdb/tabs';

const AppRouter = () => {
  return (
      <Suspense fallback={<Loader/>}>
        <Routes>
          {tabs.map(tab => (
            <Route 
              key={tab.id}
              path={`/${tab.id}`}
              Component={lazy(() => delayForDemo( import(`./${tab.path}`)) )}
              exact
            />
          ))}
          <Route path='*' element={<Navigate to={`./${tabs[0].id}`}/>}/>
        </Routes>
      </Suspense>
  );
}

export default AppRouter;



// Example delay
async function delayForDemo(promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  return promise;
}