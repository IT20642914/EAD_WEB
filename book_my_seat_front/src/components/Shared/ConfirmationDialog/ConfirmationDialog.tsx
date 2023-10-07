import React from 'react'
import { BootstrapDialog, BootstrapDialogActions, BootstrapDialogContent, BootstrapDialogTitle } from '../../../assets/theme/theme'
import CustomButton from '../CustomButton/CustomButton'
import styles from './ConfirmationDialog.module.scss'

const ConfirmationDialog: React.FC<{
    isOpenConfirmationDialog: boolean
    onCallback(con: boolean): void
    title: string
    content: string
    confirmButtonTitle?: string
    cancelButtonTitle?: string
}> = (props) => {
  return (
    <BootstrapDialog
      className={styles.dialogCard}
      aria-labelledby="customized-dialog-title"
      open={props.isOpenConfirmationDialog}
    >
      <BootstrapDialogTitle id="customized-dialog-title"
        onClose={() => props.onCallback(false)}
      >
        {props.title}
      </BootstrapDialogTitle>
      <BootstrapDialogContent>
        {props.content}
      </BootstrapDialogContent>
      <BootstrapDialogActions>
        <CustomButton text={props.cancelButtonTitle ? props.cancelButtonTitle : 'Cancel'} border='1px solid #6e6e6e' bgColor='#282828' onClick={() => props.onCallback(false)} />
        <CustomButton text={props.confirmButtonTitle ? props.confirmButtonTitle : 'Confirm'} onClick={() => props.onCallback(true)}/>
      </BootstrapDialogActions>
    </BootstrapDialog>
  )
}

export default ConfirmationDialog
