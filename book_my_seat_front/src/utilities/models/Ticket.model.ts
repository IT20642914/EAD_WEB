import { Dayjs } from "dayjs";
import { FormFieldDto, OptionsDto } from ".";

export interface TicketReservationDetailsDto{
    referenceID: string;
    reservationID: string;
    TicketType:string;
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

export interface TicketReservationDetailsFormDto{
    ticketCount:FormFieldDto<OptionsDto>,
    totalPrice:FormFieldDto<string>, 
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
}
export interface TicketReservationTableDto{
    seatNumber:string,
    

}





