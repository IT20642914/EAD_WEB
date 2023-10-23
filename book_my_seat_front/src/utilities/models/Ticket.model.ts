import dayjs, { Dayjs } from "dayjs";
import { FormFieldDto, OptionsDto } from ".";
import { station } from "./trains.model";

export interface TicketReservationDetailsDto{
    referenceID: string[];
    reservationID: string;
    ticketType:TicketType;
    reservedPersonName:string;
    reserverNationalID:string;
    ticketIDs: string[];
    ticketCount: number;
    seatNumbers:string[];
    isActive:boolean;
    trainName: string;
    departureTime:string;
    departureDate:string;
    departureFrom: station;
    arriveTime:string;
    arriveTo: station;
    totalPrice: number;
    dipatureDistance:number;
    arriveDistance: number;
} 
export interface TicketReservationDetailsParmDto{
    ReservationID:string;
    ReferenceIDs:string[];
    ticketCount:number,
    totalPrice:number, 
    reservedPersonName:string,
    ReserverNationalID:string,
    departureFrom:station,
    departureDate:string,
    departureTime: string
    arriveTime:string
    arriveTo:station, 
    trainName:string
    TicketType:TicketType,
    arriveDistance:number
    dipatureDistance:number
}

 export interface  TicketType{
    ticketTypeID:string;
    ticketTypeName:string;
    
 }

export interface TicketReservationDetailsFormDto{
    ReferenceIDs:FormFieldDto<string[]>,
    reservationID:FormFieldDto<string>,
    ticketCount:FormFieldDto<OptionsDto>,
    totalPrice:FormFieldDto<number>, 
    reservedPersonName:FormFieldDto<string>,
    reserverNationalID:FormFieldDto<string>,
    departureFrom:FormFieldDto<OptionsDto>;
    departureDate:FormFieldDto<string>;
    departureTime: FormFieldDto<OptionsDto>;
    arriveTime: FormFieldDto<string>;
    arriveTo:FormFieldDto<OptionsDto>, 
    trainName:FormFieldDto<OptionsDto>,
    seatNumbers:FormFieldDto<OptionsDto>,
    TicketType:FormFieldDto<OptionsDto>,
    arriveDistance:FormFieldDto<number>
    dipatureDistance:FormFieldDto<number>
}
export interface TicketReservationTableDto{
    seatNumber:string,
}





