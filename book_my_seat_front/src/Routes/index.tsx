import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import { APP_ROUTES } from "../utilities/constants";
import { BoDashboard } from '../pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={APP_ROUTES.ROOT} element={<BoDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes