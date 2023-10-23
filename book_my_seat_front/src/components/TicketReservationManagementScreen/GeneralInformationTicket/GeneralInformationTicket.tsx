import React from 'react'
import style from './GeneralInformation.module.scss'
import { TicketReservationDetailsFormDto } from '../../../utilities/models'
import Stepper from '../../Shared/Stepper/Stepper'
import { Grid } from '@mui/material'
import CustomAutocomplete from '../../Shared/CustomAutocomplete/CustomAutocomplete'
import { Ticket_Counts, Train_Ticket_Classes } from '../../../utilities/constants'
import { StyledTextField } from '../../../assets/theme/theme'
import { CustomDatePicker, CustomTimePicker } from '../../Shared'
const GeneralInformationTicket:React.FC<{

  helperText: boolean
  screenMode: string
  TicketInfomationForm:TicketReservationDetailsFormDto 
  onInputHandleChange(property: string, value: any): void;
  handleInputFocus(property: string, section: string): void;
}> = (props) => {

  const ticketCount=props.TicketInfomationForm.ticketCount
  const TicketType=props.TicketInfomationForm.TicketType
  const ReservedPesonName=props.TicketInfomationForm.reservedPersonName
  const ReserverNationalID=props.TicketInfomationForm.ReserverNationalID
  const depatureDate=props.TicketInfomationForm.departureDate

  

  return (
    <Stepper stepNumber={1} stepTitle={"General Information"}>
          <Grid container spacing={4}>
           <Grid item xs={12} md={6}>
           <StyledTextField
  fullWidth
  label="Identification Card Number"
  placeholder='Enter Identification Card Number'
  size='small'
  value={ReserverNationalID.value}
  error={!!ReserverNationalID.error}
  disabled={ReserverNationalID.disable}
  required={ReserverNationalID.isRequired}
  helperText={props.helperText && ReserverNationalID.error}
  onFocus={() => props.handleInputFocus('ReserverNationalID', 'GI')}
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('ReserverNationalID', event.target.value)}
/>
           </Grid>
           <Grid item xs={12} md={6}>
           <StyledTextField
  fullWidth
  label="Reserved Peson Name"
  placeholder='Enter Reserved PesonName'
  size='small'
  value={ReservedPesonName.value}
  error={!!ReservedPesonName.error}
  disabled={ReservedPesonName.disable}
  required={ReservedPesonName.isRequired}
  helperText={props.helperText && ReservedPesonName.error}
  onFocus={() => props.handleInputFocus('ReservedPesonName', 'GI')}
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('ReservedPesonName', event.target.value)}
/>
  </Grid>
           <Grid item xs={12} md={6}>
           <CustomAutocomplete
                     freeSolo={true}
                      label="Ticket Type"
                      placeholder="Select Ticket Type"
                      onFocus={() =>
                        props.handleInputFocus("TicketType", "GI")
                      }
                      options={
                        Train_Ticket_Classes &&
                        Train_Ticket_Classes.map((l: any) => {
                          return { label: l.name, value: l.id };
                        })
                      }
                      value={{
                        label: TicketType.value.label,
                        value: TicketType.value.value,
                      }}
                      error={!!TicketType.error}
                      disabled={TicketType.disable}
                      readonly={TicketType.readonly}
                      required={TicketType.isRequired}
                      helperText={props.helperText && TicketType.error}
                      onChange={(event: any, value: any) =>
                        props.onInputHandleChange("TicketType", value)
                      }
                    />
           </Grid>
           <Grid item xs={12} md={6}>
           <CustomAutocomplete
                     freeSolo={true}
                      label="Ticket Count"
                      placeholder="Select Ticket Cou"
                      onFocus={() =>
                        props.handleInputFocus("ticketCount", "GI")
                      }
                      options={
                        Ticket_Counts &&
                        Ticket_Counts.map((l: any) => {
                          return { label: l.name, value: l.id };
                        })
                      }
                      value={{
                        label: ticketCount.value.label,
                        value: ticketCount.value.value,
                      }}
                      error={!!ticketCount.error}
                      disabled={ticketCount.disable}
                      readonly={ticketCount.readonly}
                      required={ticketCount.isRequired}
                      helperText={props.helperText && ticketCount.error}
                      onChange={(event: any, value: any) =>
                        props.onInputHandleChange("ticketCount", value)
                      }
                    />
           </Grid>
         
           <Grid item xs={12} md={6}>
           <CustomDatePicker
                    label="Departure date"
                    placeholder='Select Date'
                    multiple={false}
                    value={depatureDate.value}
                    minDate={new Date()}
                    maxDate={new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)} 
                    error={!!depatureDate.error}
                    disabled={depatureDate.disable}
                    readOnly={depatureDate.readonly}
                    required={depatureDate.isRequired}
                    helperText={props.helperText && depatureDate.error}
                    onFocus={() => props.handleInputFocus('depatureDate', 'GI')}
                    onChange={(value: any) => props.onInputHandleChange('depatureDate', value)}
                  />
                </Grid>
           </Grid>
    </Stepper>
  )
}

export default GeneralInformationTicket