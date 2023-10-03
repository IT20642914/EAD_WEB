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
  distancefromstartPoint:number,
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
  id: number,
  name: string,
  fristClassSeatCount:number,
  secondClassSeatCount:number,
  ThirdClassSeatCount:number,
  status:boolean,
  sheduleDateRange:string[]
  schedule:schedule[],
  stations:station[],
}