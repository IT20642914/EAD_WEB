import React from 'react'
import style from './TicketReservationManagementScreen.module.scss'
import { Typography } from '@mui/material'
import { AppLayout } from '../../templates'

const TicketReservationManagementScreen = () => {
  return (
    <React.Fragment>
    <AppLayout componentTitle="New Traveler">
      <section className="page-root">
        <section className={style.sectionCard}>
          <section className={style.sectionCardHeader}>
            <Typography noWrap component="div" className={style.title}>
              <h3>Manage Ticket  Bookings </h3>
            </Typography>
          </section>
          <section className={style.sectionCardBody}>
          <section className={style.stepperRoot}>


          </section>
         </section>
          </section>
        </section>
      </AppLayout>
    </React.Fragment>
  )
}

export default TicketReservationManagementScreen