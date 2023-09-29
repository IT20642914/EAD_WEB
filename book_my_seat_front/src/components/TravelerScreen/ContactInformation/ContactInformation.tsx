import React from 'react'
import Stepper from '../../Shared/Stepper/Stepper'
import { TravellerInformationFormDto } from '../../../utilities/models/travellor.model'
import { Grid } from '@mui/material'
import { StyledTextField } from '../../../assets/theme/theme'

const ContactInformation:React.FC<{
    helperText: boolean
    screenMode: string
    TravelloerInfomationForm:TravellerInformationFormDto 
    onInputHandleChange(property: string, value: any): void;
    handleInputFocus(property: string, section: string): void;
}> = (props)=> {
    const address = props.TravelloerInfomationForm.address
    const email = props.TravelloerInfomationForm.email
    const contactHome = props.TravelloerInfomationForm.contactHome
    const contactMobile = props.TravelloerInfomationForm.contactMobile
  return (
    <Stepper stepNumber={2} stepTitle={"Contact Information"}>
         <Grid container spacing={4}>
           <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Address"
                      placeholder='Enter Address'
                      size='small'
                      value={address.value}
                      error={!!address.error}
                      disabled={address.disable}
                      required={address.isRequired}
                      helperText={props.helperText && address.error}
                      onFocus={() => props.handleInputFocus('address', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('address', event.target.value)}
                    />
            </Grid>
            <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Email Address"
                      placeholder='Enter Email Address'
                      size='small'
                      value={email.value}
                      error={!!email.error}
                      disabled={email.disable}
                      required={email.isRequired}
                      helperText={props.helperText && email.error}
                      onFocus={() => props.handleInputFocus('email', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('email', event.target.value)}
                    />
            </Grid>
            <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Contact Home Number"
                      placeholder='Enter Contact Home Number'
                      size='small'
                      value={contactHome.value}
                      error={!!contactHome.error}
                      disabled={contactHome.disable}
                      required={contactHome.isRequired}
                      helperText={props.helperText && contactHome.error}
                      onFocus={() => props.handleInputFocus('contactHome', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('contactHome', event.target.value)}
                    />
            </Grid>
            <Grid item xs={12} md={6}>
           <StyledTextField
                      fullWidth
                      label="Contact Mobile Number"
                      placeholder='Enter Contact Mobile Number'
                      size='small'
                      value={contactMobile.value}
                      error={!!contactMobile.error}
                      disabled={contactMobile.disable}
                      required={contactMobile.isRequired}
                      helperText={props.helperText && contactMobile.error}
                      onFocus={() => props.handleInputFocus('contactMobile', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('contactMobile', event.target.value)}
                    />
            </Grid>
           </Grid>
    </Stepper>
  )
}

export default ContactInformation
