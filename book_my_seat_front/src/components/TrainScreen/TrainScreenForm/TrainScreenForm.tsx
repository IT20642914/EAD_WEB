import React from 'react'
import { SheduleListFormDto, schedule, trainDetailsGridFormDto } from '../../../utilities/models/trains.model'
import style from './TrainScreenForm.module.scss'
import Stepper from '../../Shared/Stepper/Stepper'
import { Grid, Typography } from '@mui/material'
import { StyledSwitch, StyledTextField } from '../../../assets/theme/theme'
import { Train_Ticket_Classes, Train_Types, stations, } from '../../../utilities/constants'
import CustomAutocomplete from '../../Shared/CustomAutocomplete/CustomAutocomplete'
const TrainScreenForm :React.FC<{
  helperText: boolean
  screenMode: string
  SheduleData:schedule[]
  SheduleInfomationForm:SheduleListFormDto
  TrainInfomationForm:trainDetailsGridFormDto 
  onInputHandleChange(property: string, value: any): void;
  handleInputFocus(property: string, section: string): void;
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
  const TotalSeatCount:number=Number(firstClassSeatCount)+Number(secondClassSeatCount)+Number(thirdClassSeatCount)

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
                        stations &&
                        stations.map((l: any) => {
                          return { label: l.station, value: l.stationId };
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
                        stations &&
                        stations.map((l: any) => {
                          return { label: l.station, value: l.stationId };
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
                      value={TotalSeatCount}
                      error={false}
                      disabled={false}
                      required={false}
                      helperText={props.helperText && thirdClassSeatCount.error}
                      onFocus={() => props.handleInputFocus('TotalSeatCount', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('TotalSeatCount', event.target.value)}
                    />
           </Grid>
    
      </Grid>
</Stepper>
<Stepper stepNumber={3} stepTitle={"Shedule Information"}>
          <Grid container spacing={4}>
           <Grid item xs={12} md={6}>
           </Grid>
    
    </Grid>
</Stepper>
</>
  )
}

export default TrainScreenForm