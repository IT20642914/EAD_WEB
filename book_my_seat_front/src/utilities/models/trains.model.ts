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
} 

export interface TainlistDto{
  id: number,
  name: string,
} 

export interface SeatNumber{
  id: number,
  name: string,
} 