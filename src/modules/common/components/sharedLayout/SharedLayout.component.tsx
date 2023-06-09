import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../';

export const SharedLayout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
