import { AlertDto, StateObjectDto, TicketReservationDetailsDto } from ".";
import { getAvilibleTrainDto, station, traindetailsDto } from "./trains.model";
import { LoginResponseDto, travelerDto } from "./travellor.model";

export interface AlertStateDto {
    notifications: AlertDto[];
  }
  export  interface StationStateDto {
    getAllStation:StateObjectDto<station[]>
  }
  export  interface TicketStateDto {
    getAllBookings:StateObjectDto<TicketReservationDetailsDto[]>
    createBooking:StateObjectDto<any>
  }
  export  interface TravelerStateDto {
    getAllTravelers:StateObjectDto<travelerDto[]>
    addTravelers:StateObjectDto<any>
    getTravelerByID:StateObjectDto<any>
    updateTravelerByID:StateObjectDto<any>
    deleteTravelerByID:StateObjectDto<any>
    LoginRequest:StateObjectDto<LoginResponseDto>
  }
  export  interface TrainStateDto {
    getAllTrainList:StateObjectDto<any[]>
    addTrainDetails:StateObjectDto<any>
    getDetailsById:StateObjectDto<any>
    updatetrainDetailsByid:StateObjectDto<any>
    deleteTrainDetailsByid:StateObjectDto<any>
    getAvilibletrains:StateObjectDto<getAvilibleTrainDto[]>
  }
export interface ApplicationStateDto {
    alert: AlertStateDto;
    station:StationStateDto,
    train:TrainStateDto,
    traveler:TravelerStateDto
    ticket:TicketStateDto
  }
