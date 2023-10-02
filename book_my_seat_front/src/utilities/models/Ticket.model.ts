
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
    Totalprice: number
}

export interface TicketReservationDetailsFormDto{

    
}

export interface traindetailsDtsssp{
    depature: string;
    departureDateTime: string;
    depatureFrom: string;
    returnDate: string
    returnTime: string
    returnTo: string;

}