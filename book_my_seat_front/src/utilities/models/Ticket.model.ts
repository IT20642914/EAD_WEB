import { Dayjs } from "dayjs";
import { FormFieldDto, OptionsDto } from ".";
import { station } from "./trains.model";

export interface TicketReservationDetailsDto{
    referenceID: string[];
    reservationID: string;
    TicketType:TicketType;
    ReservedPesonName:string;
    ReserverNationalID:string;
    ticketIDs: string[];
    ticketCount: number;
    seatNumbers:string[];
    trainName: string;
    depatureFromDateandTime: string;
    depatureFrom: string;
    arriveDateAndTime:string
    arriveTo: string;
    totalPrice: number
} 
export interface TicketReservationDetailsParmDto{
    ticketCount:number,
    totalPrice:number, 
    ReservedPesonName:string,
    ReserverNationalID:string,
    depatureFrom:station,
    depatureDate:string,
    depatureTime: string
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
    ticketCount:FormFieldDto<OptionsDto>,
    totalPrice:FormFieldDto<number>, 
    ReservedPesonName:FormFieldDto<string>,
    ReserverNationalID:FormFieldDto<string>,
    depatureFrom:FormFieldDto<OptionsDto>;
    depatureDate:FormFieldDto<OptionsDto>;
    depatureTime: FormFieldDto<OptionsDto>;
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





