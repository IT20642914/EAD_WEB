import React from 'react'
import { AppLayout } from '../../templates'
import { Grid } from '@mui/material'
import BudgetGraph from '../../components/Shared/RequestBudgetGraph/BudgetGraph'

import TicketSummaryChart from '../../components/TicketSummaryChart/TicketSummaryChart'

const TicketReservationManagement = () => {
  return (
    <React.Fragment>
    <AppLayout componentTitle="Traveler Management">
      <section className='page-root'>
      <Grid container spacing={4}>

     <Grid item md={6}>
     <BudgetGraph/>
     </Grid>
     <Grid item md={6}>
     <TicketSummaryChart/>
     </Grid>
     </Grid>

      </section>
    </AppLayout>
  </React.Fragment>
  )
}

export default TicketReservationManagement