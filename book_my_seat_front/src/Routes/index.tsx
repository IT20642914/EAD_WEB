import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import { APP_ROUTES } from "../utilities/constants";
import { BoDashboard, Login, TicketReservationManagement, TravelerScreen } from '../pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={APP_ROUTES.ROOT} element={<Login />} />
      <Route path={APP_ROUTES.TRAVELLER_MANAGEMENT} element={<BoDashboard/>}/>
      <Route path={APP_ROUTES.CREATE_TRAVELLER} element={<TravelerScreen/>}/>

      <Route path={APP_ROUTES.TR_MANAGEMENT} element={<TicketReservationManagement/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes