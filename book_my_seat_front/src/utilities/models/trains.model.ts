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
  sheduleid:string
  trainId:string,
  trainName:string
  status:boolean,
  startingStation:string,
  arrivingStation:string,
  scheduleDateRange:string
  schedule:schedule[],
  stations:station[],
}
