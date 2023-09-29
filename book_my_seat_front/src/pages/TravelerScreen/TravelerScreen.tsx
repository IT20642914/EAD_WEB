import React from 'react'
import { AppLayout } from '../../templates'
import style from './TravelerScreen.module.scss'
import { Typography } from '@mui/material'
const TravelerScreen = () => {
  return (
    <React.Fragment>
      <AppLayout componentTitle="New Request Creation">
        <section className="page-root">
          <section className={style.sectionCard}>
            <section className={style.sectionCardHeader}>
              <Typography noWrap component="div" className={style.title}>
                <h3>Traveler Screen</h3>
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

export default TravelerScreen
