import React from 'react'
import { BootstrapDialog, BootstrapDialogActions, BootstrapDialogContent, BootstrapDialogTitle, StyledTableCell } from '../../../assets/theme/theme'
import { CustomButton, CustomHeaderCell } from '../../Shared'
import styles from './ViewStationsPopup.module.scss'
import { Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { schedule, station } from '../../../utilities/models/trains.model'


const ViewStationsPopup : React.FC<{

    OnPopUPClose(property:string): void;
    isOpenViewStationsPopup: boolean;
    station:station[]
  
  }> = (props)=> {
  return (
    <BootstrapDialog
    width={"1200px"}
    className={styles.dialogCard}
    aria-labelledby="customized-dialog-title"
    open={props.isOpenViewStationsPopup}
  >
    <BootstrapDialogTitle id="customized-dialog-title"
      onClose={() => { props.OnPopUPClose("") }}>
     Stations
    </BootstrapDialogTitle>


    <BootstrapDialogContent>
    <TableContainer>
                                      <Table size="small">
                                          <TableHead>
                                              <TableRow>
                                                  <CustomHeaderCell id='id' >Station</CustomHeaderCell>
                                                  <CustomHeaderCell id='id' >Arrival Time</CustomHeaderCell>
                                                 
                                              </TableRow>
                                          </TableHead>
                                          <TableBody>

                                              {props.station.map((station, index) => (
                                                  <TableRow key={index}>
                                                      <StyledTableCell>{station.stationId}</StyledTableCell>
                                                      <StyledTableCell>{station.stationName}</StyledTableCell>
                                               
                                                  </TableRow>
                                              ))}
                                          </TableBody>
                                      </Table>
                                      </TableContainer>
      
    </BootstrapDialogContent>
  
  </BootstrapDialog>
  )
}

export default ViewStationsPopup