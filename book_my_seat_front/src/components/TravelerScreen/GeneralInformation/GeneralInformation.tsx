import React from 'react'
import { TravellerInformationFormDto } from '../../../utilities/models/travellor.model'
import Stepper from '../../Shared/Stepper/Stepper'
import { Grid, Typography } from '@mui/material'
import { StyledSwitch, StyledTextField } from '../../../assets/theme/theme'
import style from './GeneralInformation.module.scss'
const GeneralInformation:React.FC<{
    helperText: boolean
    screenMode: string
    TravelloerInfomationForm:TravellerInformationFormDto 
    onInputHandleChange(property: string, value: any): void;
    handleInputFocus(property: string, section: string): void;
}> = (props) => {
  const firstName = props.TravelloerInfomationForm.firstName
  const lastName = props.TravelloerInfomationForm.lastName
  const userName = props.TravelloerInfomationForm.userName
  const status = props.TravelloerInfomationForm.status
  const identificationCard = props.TravelloerInfomationForm.identificationCard


  return (
     <Stepper stepNumber={1} stepTitle={"General Information"}>
        
                <>
           <Grid container spacing={4}>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Identification Card Number"
                      placeholder='Enter Identification Card Number'
                      size='small'
                      value={identificationCard.value}
                      error={!!identificationCard.error}
                      disabled={identificationCard.disable}
                      required={identificationCard.isRequired}
                      helperText={props.helperText && identificationCard.error}
                      onFocus={() => props.handleInputFocus('identificationCard', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('identificationCard', event.target.value)}
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Frist Name"
                      placeholder='Enter Frist Name'
                      size='small'
                      value={firstName.value}
                      error={!!firstName.error}
                      disabled={firstName.disable}
                      required={firstName.isRequired}
                      helperText={props.helperText && firstName.error}
                      onFocus={() => props.handleInputFocus('firstName', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('firstName', event.target.value)}
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Last Name"
                      placeholder='Enter Last Name'
                      size='small'
                      value={lastName.value}
                      error={!!lastName.error}
                      disabled={lastName.disable}
                      required={lastName.isRequired}
                      helperText={props.helperText && lastName.error}
                      onFocus={() => props.handleInputFocus('lastName', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('lastName', event.target.value)}
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="User Name"
                      placeholder='Enter User Name'
                      size='small'
                      value={userName.value}
                      error={!!userName.error}
                      disabled={userName.disable}
                      required={userName.isRequired}
                      helperText={props.helperText && userName.error}
                      onFocus={() => props.handleInputFocus('userName', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('userName', event.target.value)}
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <div className={style.switchField}>
          <Typography className={style.label}>Set Travellor Active</Typography>
          <StyledSwitch
            checked={status.value}
            disabled={status.disable}
            onChange={() => props.onInputHandleChange('status',status.value)}
          />
        </div>
           </Grid>

           </Grid>

           </>
           
            
            
        
     </Stepper>
  )
}

export default GeneralInformation
