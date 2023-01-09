import React from 'react';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div id="loader">
      <div className={css.progressRing}>
        <div className={css.loader}></div>
      </div>
    </div>
  );
};

export default Loader;
