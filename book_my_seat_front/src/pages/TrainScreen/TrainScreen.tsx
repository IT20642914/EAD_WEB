import React from 'react'
import style   from "./TrainScreen.module.scss";
import { Typography } from '@mui/material';
import { AppLayout } from '../../templates';
const TrainScreen = () => {


  return (
    <React.Fragment>
    <AppLayout componentTitle="New Traveler">
      <section className="page-root">
      <section className={style.sectionCard}>
          <section className={style.sectionCardHeader}>
            <Typography noWrap component="div" className={style.title}>
              <h3>Manage Trains</h3>
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

export default TrainScreen