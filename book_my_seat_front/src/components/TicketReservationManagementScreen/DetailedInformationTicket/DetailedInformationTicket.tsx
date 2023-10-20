import { Box, Grid, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import React from "react";
import Stepper from "../../Shared/Stepper/Stepper";
import { TicketReservationDetailsFormDto } from "../../../utilities/models";
import { SeatNumber, TainlistDto, schedule, station } from "../../../utilities/models/trains.model";
import CustomAutocomplete from "../../Shared/CustomAutocomplete/CustomAutocomplete";
import { StyledTableCell, StyledTextField } from "../../../assets/theme/theme";
import { CustomHeaderCell } from "../../Shared";
import { EditOutlined } from "@mui/icons-material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const DetailedInformationTicket: React.FC<{
 
    SelectedSeatLis:SeatNumber[]
SeatData:SeatNumber[]
  Shedules:schedule[];
  stationList: station[];
  TrainList: TainlistDto[];
  helperText: boolean;
  screenMode: string;
  TicketInfomationForm: TicketReservationDetailsFormDto;
  onInputHandleChange(property: string, value: any): void;
  handleInputFocus(property: string, section: string): void;
  removeFrometable(id: Number): void;
}> = (props) => {
  const trainName = props.TicketInfomationForm.trainName;
  const depatureFrom = props.TicketInfomationForm.departureFrom;
  const arriveTo = props.TicketInfomationForm.arriveTo;
  const depatureTime=props.TicketInfomationForm.departureTime
  const arriveTime=props.TicketInfomationForm.arriveTime
  const seatNumbers=props.TicketInfomationForm.seatNumbers
  const totalPrice=props.TicketInfomationForm.totalPrice
  // const TicketType=props.TicketInfomationForm.TicketType

  return (
    <Stepper stepNumber={2} stepTitle={"Detailed Information"}>
      <Grid container spacing={4}>
       
        <Grid item xs={12} md={6}>
          <CustomAutocomplete
            freeSolo={true}
            label="Depature From"
            placeholder="Select Depature From"
            onFocus={() => props.handleInputFocus("depatureFrom", "GI")}
            options={
              props.stationList &&
              props.stationList.map((l: station) => {
                return { label: l.stationName, value: l.stationId };
              })
            }
            value={{
              label: depatureFrom.value.label,
              value: depatureFrom.value.value,
            }}
            error={!!depatureFrom.error}
            disabled={depatureFrom.disable}
            readonly={depatureFrom.readonly}
            required={depatureFrom.isRequired}
            helperText={props.helperText && depatureFrom.error}
            onChange={(event: any, value: any) =>
              props.onInputHandleChange("depatureFrom", value)
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomAutocomplete
            freeSolo={true}
            label="ArriveTo"
            placeholder="Select Arrive To"
            onFocus={() => props.handleInputFocus("arriveTo", "GI")}
            options={
              props.stationList &&
              props.stationList.map((l: station) => {
                return { label: l.stationName, value: l.stationId };
              })
            }
            value={{
              label: arriveTo.value.label,
              value: arriveTo.value.value,
            }}
            error={!!arriveTo.error}
            disabled={arriveTo.disable}
            readonly={arriveTo.readonly}
            required={arriveTo.isRequired}
            helperText={props.helperText && arriveTo.error}
            onChange={(event: any, value: any) =>
              props.onInputHandleChange("arriveTo", value)
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomAutocomplete
            freeSolo={true}
            label="Train Name"
            placeholder="Select Train Name"
            onFocus={() => props.handleInputFocus("trainName", "GI")}
            options={
              props.TrainList &&
              props.TrainList.map((l: any) => {
                return { label: l.name, value: l.id };
              })
            }
            value={{
              label: trainName.value.label,
              value: trainName.value.value,
            }}
            error={!!trainName.error}
            disabled={trainName.disable}
            readonly={trainName.readonly}
            required={trainName.isRequired}
            helperText={props.helperText && trainName.error}
            onChange={(event: any, value: any) =>
              props.onInputHandleChange("trainName", value)
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomAutocomplete
            freeSolo={true}
            label="Depature Time"
            placeholder="Select Depature Time"
            onFocus={() => props.handleInputFocus("depatureTime", "GI")}
            options={
              props.Shedules &&
              props.Shedules.map((l: schedule) => {
                return { label: l.departureAt, value: l.stationId };
              })
            }
            value={{
              label: depatureTime.value.label,
              value: depatureTime.value.value,
            }}
            error={!!depatureTime.error}
            disabled={depatureTime.disable}
            readonly={depatureTime.readonly}
            required={depatureTime.isRequired}
            helperText={props.helperText && depatureTime.error}
            onChange={(event: any, value: any) =>
              props.onInputHandleChange("depatureTime", value)
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <StyledTextField
  fullWidth
  label="Arrive Time"
  placeholder='Enter Arrive Time'
  size='small'
  value={arriveTime.value}
  error={!!arriveTime.error}
  disabled={arriveTime.disable}
  required={arriveTime.isRequired}
  helperText={props.helperText && arriveTime.error}
  onFocus={() => props.handleInputFocus('arriveTime', 'GI')}
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('arriveTime', event.target.value)}
/>
        </Grid>
        <Grid item xs={12} md={6}>
           <StyledTextField
  fullWidth
  label="Toatal Price"
  placeholder='Enter Toatal Price'
  size='small'
  value={totalPrice.value}
  error={!!totalPrice.error}
  disabled={totalPrice.disable}
  required={totalPrice.isRequired}
  helperText={props.helperText && totalPrice.error}
  onFocus={() => props.handleInputFocus('totalPrice', 'GI')}
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onInputHandleChange('totalPrice', event.target.value)}
/>
  </Grid>
        {/* <Grid item xs={12} md={6}>
          <CustomAutocomplete
            freeSolo={true}
            label="Seat Numbers"
            placeholder="Select Seat Numbers"
            onFocus={() => props.handleInputFocus("seatNumbers", "GI")}
            options={
              props.SeatData &&
              props.SeatData.map((l: SeatNumber) => {
                return { label: l.name, value: l.id };
              })
            }
            value={{
              label: seatNumbers.value.label,
              value: seatNumbers.value.value,
            }}
            error={!!seatNumbers.error}
            disabled={seatNumbers.disable}
            readonly={seatNumbers.readonly}
            required={seatNumbers.isRequired}
            helperText={props.helperText && seatNumbers.error}
            onChange={(event: any, value: any) =>
              props.onInputHandleChange("seatNumbers", value)
            }
          />
        </Grid>
        <Grid item xs={12} md={12}>
        </Grid>*/}
      </Grid> 
      {/* <section>
        <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <CustomHeaderCell id='NO' >Serial Number</CustomHeaderCell>
                    <CustomHeaderCell id='Seat Name'  >Item description</CustomHeaderCell>
                    <CustomHeaderCell id='Seat Name'  >Action</CustomHeaderCell>
                  </TableRow>
                </TableHead>
                {props.SelectedSeatLis && props.SelectedSeatLis.length > 0 &&
                  <TableBody>
                    {props.SelectedSeatLis.map((p: SeatNumber) => (
                      <TableRow>
                        <StyledTableCell >{p.id}</StyledTableCell>
                        <StyledTableCell >{p.name}</StyledTableCell>
                      
                          <StyledTableCell style={{ backgroundColor: '#282828' }}>
                            <Box className='layout-row'>
                              <Box>
                                <IconButton size='small' onClick={() => props.removeFrometable(p.id)}>
                                  <Tooltip title="Delete">
                                    <DeleteOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                                  </Tooltip>
                                </IconButton>
                              </Box>
                             
                                
                          
                            </Box>
                          </StyledTableCell>
                        
                      </TableRow>
                    ))}
                  </TableBody>
                }
                {props.SelectedSeatLis.length === 0 &&
                  <TableBody>
                    <TableRow>
                      <StyledTableCell align="center" colSpan={7}>No data to preview</StyledTableCell>
                    </TableRow>
                  </TableBody>
                }
              </Table>
            </TableContainer>
          </section> */}
    </Stepper>
  );
};

export default DetailedInformationTicket;
