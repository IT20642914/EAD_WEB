import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import { APP_ROUTES } from "../utilities/constants";
import { BoDashboard, Login, TicketReservationManagement, TicketReservationManagementScreen, TravelerScreen } from '../pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={APP_ROUTES.ROOT} element={<Login />} />
      {/* Travelor Routes */}
      <Route path={APP_ROUTES.TRAVELLER_MANAGEMENT} element={<BoDashboard/>}/>
      <Route path={APP_ROUTES.CREATE_TRAVELLER} element={<TravelerScreen/>}/>

{/* Ticket booking Routes */}
      <Route path={APP_ROUTES.TR_MANAGEMENT} element={<TicketReservationManagement/>}/>
      <Route path={APP_ROUTES.BOOK_TICKET} element={<TicketReservationManagementScreen/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default AppRoutes