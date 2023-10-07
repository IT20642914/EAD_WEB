import { FormFieldDto, OptionsDto } from ".";

export interface trainDetailsDto{
    id: number,
    name: string,
    schedule:schedule[],
    stations:station[]
  }
export interface station{
    stationId:string,
    station:string,

} 
export interface schedule{
  stationId:string,
  station:string,
  arrivalTime:string,
  departureTime:string,
  distanceFromStartPoint:number,
} 

export interface TainlistDto{
  id: number,
  name: string,
} 

export interface SeatNumber{
  id: number,
  name: string,
} 
export interface trainDetailsGridDto{
  id: number;
  name: string;
  firstClassSeatCount: number;
  secondClassSeatCount: number;
  thirdClassSeatCount: number;
  status:boolean,
 
}
export interface sheduleTrainDetailsGridDto{

  trainId:string,
  trainName:string
  status:boolean,
  startingStation:string,
  arrivingStation:string,
  schedule:schedule[],
  stations:station[],
}
export interface trainDetailsGridFormDto{
  trainType:FormFieldDto<OptionsDto>,
  trainId: FormFieldDto<string>, 
  trainName: FormFieldDto<string>,
  trainLength: FormFieldDto<string>,  
  firstClassSeatCount:FormFieldDto<number>, 
  secondClassSeatCount:FormFieldDto<number>, 
  thirdClassSeatCount:FormFieldDto<number>, 
  startingStation:FormFieldDto<OptionsDto>, 
  arrivingStation:FormFieldDto<OptionsDto>,
  status:FormFieldDto<boolean>, 
  totalCount:FormFieldDto<number>, 
}
export interface SheduleListFormDto{
  stationId:FormFieldDto<string>,
  station:FormFieldDto<OptionsDto>,
  arrivalTime:FormFieldDto<string>,
  departureTime:FormFieldDto<string>,
  distanceFromStartPoint:FormFieldDto<number>,
}