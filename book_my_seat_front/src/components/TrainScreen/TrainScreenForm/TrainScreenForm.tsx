import React from 'react'
import { SheduleListFormDto, schedule, station, trainDetailsGridFormDto } from '../../../utilities/models/trains.model'
import style from './TrainScreenForm.module.scss'
import Stepper from '../../Shared/Stepper/Stepper'
import { Box, Grid, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
import { StyledSwitch, StyledTableCell, StyledTextField } from '../../../assets/theme/theme'
import { TRAIN_SCREEN_MODES, Train_Ticket_Classes, Train_Types, stations, } from '../../../utilities/constants'
import CustomAutocomplete from '../../Shared/CustomAutocomplete/CustomAutocomplete'
import { CustomButton, CustomHeaderCell, CustomTimePicker } from '../../Shared'
import { EditOutlined } from '@mui/icons-material'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const TrainScreenForm :React.FC<{
  helperText: boolean
  Stations:station[]
  screenMode: string
  SheduleData:schedule[]
  SheduleInfomationForm:SheduleListFormDto
  TrainInfomationForm:trainDetailsGridFormDto 
  onInputHandleChange(property: string, value: any): void;
  handleInputFocus(property: string, section: string): void;
  handleTableClick(index: number, property: string): void;
  onClearDetails(): void;
  isEdit: boolean,
  handleShedule(property : string,): void
}> = (props) => {

  const trainName = props.TrainInfomationForm.trainName
  const trainType = props.TrainInfomationForm.trainType
  const status = props.TrainInfomationForm.status
  const firstClassSeatCount = props.TrainInfomationForm.firstClassSeatCount
  const secondClassSeatCount = props.TrainInfomationForm.secondClassSeatCount
  const thirdClassSeatCount = props.TrainInfomationForm.thirdClassSeatCount
  const arrivingStation = props.TrainInfomationForm.arrivingStation
  const startingStation = props.TrainInfomationForm.startingStation
  const trainLength = props.TrainInfomationForm.trainLength
  const TotalSeatCount= props.TrainInfomationForm.totalCount
  const station = props.SheduleInfomationForm.station
  const departureTime = props.SheduleInfomationForm.departureTime
  const arrivalTime = props.SheduleInfomationForm.arrivalTime
  const distanceFromStartPoint = props.SheduleInfomationForm.distanceFromStartPoint
  



  return (<>
    <Stepper stepNumber={1} stepTitle={"General Information"}>
          <Grid container spacing={4}>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Train Name"
                      placeholder='Enter Train Name'
                      size='small'
                      value={trainName.value}
                      error={!!trainName.error}
                      disabled={trainName.disable}
                      required={trainName.isRequired}
                      helperText={props.helperText && trainName.error}
                      onFocus={() => props.handleInputFocus('trainName', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('trainName', event.target.value)}
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <CustomAutocomplete
                     freeSolo={true}
                      label="Train Type"
                      placeholder="Select Train Type"
                      onFocus={() =>
                        props.handleInputFocus("trainType", "GI")
                      }
                      options={
                        Train_Types &&
                        Train_Types.map((l: any) => {
                          return { label: l.name, value: l.id };
                        })
                      }
                      value={{
                        label: trainType.value.label,
                        value: trainType.value.value,
                      }}
                      error={!!trainType.error}
                      disabled={trainType.disable}
                      readonly={trainType.readonly}
                      required={trainType.isRequired}
                      helperText={props.helperText && trainType.error}
                      onChange={(event: any, value: any) =>
                        props.onInputHandleChange("trainType", value)
                      }
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Train Length"
                      placeholder='Enter Train Length'
                      size='small'
                      value={trainLength.value}
                      error={!!trainLength.error}
                      disabled={trainLength.disable}
                      required={trainLength.isRequired}
                      helperText={props.helperText && trainLength.error}
                      onFocus={() => props.handleInputFocus('trainLength', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('trainLength', event.target.value)}
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <div className={style.switchField}>
          <Typography className={style.label}>Set Train Active</Typography>
          <StyledSwitch
            checked={status.value}
            disabled={status.disable}
            onChange={() => props.onInputHandleChange('status',status.value)}
          />
        </div>
        </Grid>
           </Grid>
    </Stepper>
     <Stepper stepNumber={2} stepTitle={"Train Details"}>
     <Grid container spacing={4}>
     <Grid item xs={12} md={6}>
     <CustomAutocomplete
                     freeSolo={true}
                      label="Departure Station"
                      placeholder="Select Departure Station"
                      onFocus={() =>
                        props.handleInputFocus("startingStation", "GI")
                      }
                      options={
                        props.Stations &&
                        props.Stations.map((l: any) => {
                          return { label: l.stationName, value: l.stationId };
                        })
                      }
                      value={{
                        label: startingStation.value.label,
                        value: startingStation.value.value,
                      }}
                      error={!!startingStation.error}
                      disabled={startingStation.disable}
                      readonly={startingStation.readonly}
                      required={startingStation.isRequired}
                      helperText={props.helperText && startingStation.error}
                      onChange={(event: any, value: any) =>
                        props.onInputHandleChange("startingStation", value)
                      }
                    />
           </Grid>
     <Grid item xs={12} md={6}>
     <CustomAutocomplete
                     freeSolo={true}
                      label="Arriving Station"
                      placeholder="Select Arriving Station"
                      onFocus={() =>
                        props.handleInputFocus("arrivingStation", "GI")
                      }
                      options={
                         props.Stations &&
                         props.Stations.map((l: any) => {
                          return { label: l.stationName, value: l.stationId };
                        })
                      }
                      value={{
                        label: arrivingStation.value.label,
                        value: arrivingStation.value.value,
                      }}
                      error={!!arrivingStation.error}
                      disabled={arrivingStation.disable}
                      readonly={arrivingStation.readonly}
                      required={arrivingStation.isRequired}
                      helperText={props.helperText && arrivingStation.error}
                      onChange={(event: any, value: any) =>
                        props.onInputHandleChange("arrivingStation", value)
                      }
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="First Class SeatCount"
                      placeholder='Enter First Class SeatCount'
                      size='small'
                      value={firstClassSeatCount.value}
                      error={!!firstClassSeatCount.error}
                      disabled={firstClassSeatCount.disable}
                      required={firstClassSeatCount.isRequired}
                      helperText={props.helperText && firstClassSeatCount.error}
                      onFocus={() => props.handleInputFocus('firstClassSeatCount', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('firstClassSeatCount', event.target.value)}
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Second Class Seat Count"
                      placeholder='Enter Second Class Seat Count'
                      size='small'
                      value={secondClassSeatCount.value}
                      error={!!secondClassSeatCount.error}
                      disabled={secondClassSeatCount.disable}
                      required={secondClassSeatCount.isRequired}
                      helperText={props.helperText && secondClassSeatCount.error}
                      onFocus={() => props.handleInputFocus('secondClassSeatCount', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('secondClassSeatCount', event.target.value)}
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Third Class Seat Count"
                      placeholder='Enter Third Class Seat Count'
                      size='small'
                      value={thirdClassSeatCount.value}
                      error={!!thirdClassSeatCount.error}
                      disabled={thirdClassSeatCount.disable}
                      required={thirdClassSeatCount.isRequired}
                      helperText={props.helperText && thirdClassSeatCount.error}
                      onFocus={() => props.handleInputFocus('thirdClassSeatCount', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('thirdClassSeatCount', event.target.value)}
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Third Class Seat Count"
                      placeholder='Enter Third Class Seat Count'
                      size='small'
                      value={TotalSeatCount.value}
                      error={!!TotalSeatCount.error}
                      disabled={TotalSeatCount.disable}
                      required={TotalSeatCount.isRequired}
                      helperText={props.helperText && TotalSeatCount.error}
                      onFocus={() => props.handleInputFocus('TotalSeatCount', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('TotalSeatCount', event.target.value)}
                    />
           </Grid>
    
      </Grid>
</Stepper>
<Stepper stepNumber={3} stepTitle={"Shedule Information"}>
          <Grid container spacing={4}>
           <Grid item xs={12} md={6}>
          
     <CustomAutocomplete
                     freeSolo={true}
                      label="Station"
                      placeholder="Select Station"
                      onFocus={() =>
                        props.handleInputFocus("station", "GI")
                      }
                      options={
                        props.Stations &&
                        props.Stations.map((l: any) => {
                          return { label: l.stationName, value: l.stationId };
                        })
                      }
                      value={{
                        label: station.value.label,
                        value: station.value.value,
                      }}
                      error={!!station.error}
                      disabled={station.disable}
                      readonly={station.readonly}
                      required={station.isRequired}
                      helperText={props.helperText && station.error}
                      onChange={(event: any, value: any) =>
                        props.onInputHandleChange("station", value)
                      }
                    />
       
           </Grid>
           <Grid item xs={12} md={6}>
           <CustomTimePicker
                    label="Arrival at"
                    placeholder='Select Time'
                    value={arrivalTime.value}
                    error={!!arrivalTime.error}
                    disabled={arrivalTime.disable}
                    readOnly={arrivalTime.readonly}
                    required={arrivalTime.isRequired}
                    helperText={props.helperText && arrivalTime.error}
                    onFocus={() => props.handleInputFocus('arrivalTime', 'GI')}
                    onChange={(value: any) => props.onInputHandleChange("arrivalTime", value)}
                  />
           </Grid>
           <Grid item xs={12} md={6}>
           <CustomTimePicker
                    label="Departure at"
                    placeholder='Select Time'
                    value={departureTime.value}
                    error={!!departureTime.error}
                    disabled={departureTime.disable}
                    readOnly={departureTime.readonly}
                    required={departureTime.isRequired}
                    helperText={props.helperText && departureTime.error}
                    onFocus={() => props.handleInputFocus('departureTime', 'GI')}
                    onChange={(value: any) => props.onInputHandleChange("departureTime", value)}
                  />
           </Grid>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Distance FromS tart Point"
                      placeholder='Enter Distance FromS tart Point'
                      size='small'
                      value={distanceFromStartPoint.value}
                      error={!!distanceFromStartPoint.error}
                      disabled={distanceFromStartPoint.disable}
                      required={distanceFromStartPoint.isRequired}
                      helperText={props.helperText && distanceFromStartPoint.error}
                      onFocus={() => props.handleInputFocus('distanceFromStartPoint', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('distanceFromStartPoint', event.target.value)}
                    />
           </Grid>
         
           <Grid item xs={12} md={12}>
           <section className={style.actions}>
            {/* <CustomButton text={!props.isEdit ? 'Add Multiple Locations' : 'Edit Multiple Locations'} border='0px solid #6e6e6e' bgColor='transparent' isShadow='none' textDecoration='underline' onClick={() => props.showAddMultipleLocationPopup(true)} /> */}
            <CustomButton text='Clear' textColor='black' bgColor='#bfbfbf' onClick={props.onClearDetails} />
            <CustomButton text={!props.isEdit ? 'Add Shedule' : 'Edit Shedule'} border='1px solid #6e6e6e' bgColor='#282828' onClick={()=>{ !props.isEdit ? props.handleShedule("AddShedule"): props.handleShedule("EditeShedule")}} />
          </section>
           </Grid>
    </Grid>
    <section className={style.gridSection}>
        <TableContainer component={Paper} className={style.grid}>
          <Table className={style.table}>
            <TableHead>
              <TableRow>
                <CustomHeaderCell id='stationId'  >Station Id</CustomHeaderCell>
                <CustomHeaderCell id='station'  >Station</CustomHeaderCell>
                <CustomHeaderCell id='arrivalTime' >Arrival Time</CustomHeaderCell>
                <CustomHeaderCell id='departureTime' >Distance From Start Point</CustomHeaderCell>
                <CustomHeaderCell id='distanceFromStartPoint' >Departure Time</CustomHeaderCell>
                {props.screenMode !== TRAIN_SCREEN_MODES.VIEW &&
                  <CustomHeaderCell width={100} id='actions' >Actions</CustomHeaderCell>
                }
              </TableRow>
            </TableHead>
            {props.SheduleData && props.SheduleData.length > 0 &&
              <TableBody>
                {props.SheduleData.map((p,index) => (
                  <TableRow key={p.stationId}>
                    <StyledTableCell >{p.stationId}</StyledTableCell>
                    <StyledTableCell >{p.station}</StyledTableCell>
                    <StyledTableCell >{p.arrivalTime}</StyledTableCell>
                    <StyledTableCell >{p.departureTime}</StyledTableCell>
                    <StyledTableCell >{p.distanceFromStartPoint}</StyledTableCell>
                    {props.screenMode !== TRAIN_SCREEN_MODES.VIEW &&
                      <StyledTableCell style={{ backgroundColor: '#282828' }}>
                        <Box className='layout-row'>
                          <Box>
                            <IconButton size='small' onClick={() => props.handleTableClick(index,"Delete")}>
                              <Tooltip title="Delete">
                                <DeleteOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                              </Tooltip>
                            </IconButton>
                          </Box>
                          <Box>
                            <IconButton size='small' onClick={() => props.handleTableClick(index,"Edite")}>
                              <Tooltip title="Edit">
                                <EditOutlined sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                              </Tooltip>
                            </IconButton>
                          </Box>
                        </Box>
                      </StyledTableCell>
                    }
                  </TableRow>
                ))}
              </TableBody>
            }
            {props.SheduleData.length === 0 &&
              <TableBody>
                <TableRow>
                  <StyledTableCell align="center" colSpan={6}>No data to preview</StyledTableCell>
                </TableRow>
              </TableBody>
            }
          </Table>
        </TableContainer>
      </section>
</Stepper>
</>
  )
}

export default TrainScreenForm