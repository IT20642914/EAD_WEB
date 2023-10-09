import { AlertDto, StateObjectDto } from ".";
import { station } from "./trains.model";

export interface AlertStateDto {
    notifications: AlertDto[];
  }
  export  interface StationStateDto {
    getAllStation:StateObjectDto<station[]>
  }
  export  interface TrainStateDto {
    getAllTrainList:StateObjectDto<any[]>
  }
export interface ApplicationStateDto {
    alert: AlertStateDto;
    station:StationStateDto,
    train:TrainStateDto,
  }
