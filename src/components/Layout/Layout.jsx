import React, { Suspense } from 'react';
import css from './Layout.module.css';
import { Appbar } from 'components/Appbar/Appbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <Appbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
