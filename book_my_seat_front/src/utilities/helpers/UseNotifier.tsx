import React from 'react'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { Button, Collapse } from '@mui/material'
import { AlertDto, ApplicationStateDto } from '../models'

const useNotifier = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const notifications:AlertDto[] = useSelector((state: ApplicationStateDto) => state.alert.notifications)
  for (const notification of notifications) {
    enqueueSnackbar(notification.message,
      {
        persist: notification.options.persist || false,
        variant: notification.options.varient,
        key: notification.options.key,
        preventDuplicate: true,
        autoHideDuration: notification.options.autoHideDuration || 4000,
        anchorOrigin: {
          vertical: notification.options.anchorOrigin?.vertical || 'bottom',
          horizontal: notification.options.anchorOrigin?.horizontal || 'right'
        },
        action: (key: any) => (
          <Button style={{ color: 'white', textTransform: 'capitalize', fontFamily: 'Ubuntu' }} onClick={() => closeSnackbar(key)}>dismiss</Button>
        ),

        TransitionComponent: Collapse
      })
  }
}

export default useNotifier