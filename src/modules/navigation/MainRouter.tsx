import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { CategoryListPage, CategoryPage, SearchPage } from '../pages';
import { APP_KEYS } from '../common/consts';
import { SharedLayout } from '../common/components';

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={APP_KEYS.ROUTER_KEYS.ROOT} element={<SharedLayout />}>
        <Route index element={<SearchPage />} />
        <Route
          path={APP_KEYS.ROUTER_KEYS.CATEGORY_LIST}
          element={<CategoryListPage />}
        />
        <Route
          path={APP_KEYS.ROUTER_KEYS.CATEGORY}
          element={<CategoryPage />}
        />
        <Route path="*" element={<Navigate to={APP_KEYS.ROUTER_KEYS.ROOT} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
