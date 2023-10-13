import { AlertDto, StateObjectDto } from ".";
import { station, traindetailsDto } from "./trains.model";
import { travelerDto } from "./travellor.model";

export interface AlertStateDto {
    notifications: AlertDto[];
  }
  export  interface StationStateDto {
    getAllStation:StateObjectDto<station[]>
  }
  export  interface TravelerStateDto {
    getAllTravelers:StateObjectDto<travelerDto[]>
    addTravelers:StateObjectDto<any>
    getTravelerByID:StateObjectDto<any>
    updateTravelerByID:StateObjectDto<any>
    deleteTravelerByID:StateObjectDto<any>
  }
  export  interface TrainStateDto {
    getAllTrainList:StateObjectDto<any[]>
    addTrainDetails:StateObjectDto<any>
    getDetailsById:StateObjectDto<any>
    updatetrainDetailsByid:StateObjectDto<any>
    deleteTrainDetailsByid:StateObjectDto<any>
  }
export interface ApplicationStateDto {
    alert: AlertStateDto;
    station:StationStateDto,
    train:TrainStateDto,
    traveler:TravelerStateDto
  }
