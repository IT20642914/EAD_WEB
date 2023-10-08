import { AlertDto, StateObjectDto } from ".";
import { station } from "./trains.model";

export interface AlertStateDto {
    notifications: AlertDto[];
  }
  export  interface StationStateDto {
    getAllStation:StateObjectDto<station[]>
  }

export interface ApplicationStateDto {
    alert: AlertStateDto;
    station:StationStateDto,
  }
