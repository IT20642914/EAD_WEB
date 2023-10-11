import React from 'react'
import { BootstrapDialog, BootstrapDialogActions, BootstrapDialogContent, BootstrapDialogTitle, StyledTableCell } from '../../../assets/theme/theme'
import { CustomButton, CustomHeaderCell } from '../../Shared'
import styles from './ViewShedulePopup.module.scss'
import { Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { schedule } from '../../../utilities/models/trains.model'

const ViewShedulePopup: React.FC<{

    OnPopUPClose(property:string): void;
    isOpenViewShedulePopup: boolean;
    schedule:schedule[]
  
  }> = (props) => {
  return (
    <BootstrapDialog
      width={"1200px"}
      className={styles.dialogCard}
      aria-labelledby="customized-dialog-title"
      open={props.isOpenViewShedulePopup}
    >
      <BootstrapDialogTitle id="customized-dialog-title"
        onClose={() => { props.OnPopUPClose("shedule") }}>
       Shedules
      </BootstrapDialogTitle>


      <BootstrapDialogContent>
      <TableContainer>
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <CustomHeaderCell id='id' >Station</CustomHeaderCell>
                                                    <CustomHeaderCell id='id' >Arrival Time</CustomHeaderCell>
                                                    <CustomHeaderCell id='id' >Departure Time</CustomHeaderCell>
                                                    <CustomHeaderCell id='id' >Distance from Start Point</CustomHeaderCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>

                                                {props.schedule.map((scheduleItem, index) => (
                                                    <TableRow key={index}>
                                                        <StyledTableCell>{scheduleItem.stationName}</StyledTableCell>
                                                        <StyledTableCell>{scheduleItem.arrivalAt}</StyledTableCell>
                                                        <StyledTableCell>{scheduleItem.departureAt}</StyledTableCell>
                                                        <StyledTableCell>
                                                            {scheduleItem.distanceFromStartPoint} km
                                                        </StyledTableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                        </TableContainer>
        
      </BootstrapDialogContent>
    
    </BootstrapDialog>
  )
}

export default ViewShedulePopup