import React from 'react';
import cl from './Loader.module.css'

const Loader = () => {
  return (
      <div className={cl.spinner}>
        <span></span>
        <span></span>
        <span></span>
      </div>
  );
}

export default Loader;
