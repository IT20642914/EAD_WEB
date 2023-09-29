import { FormFieldDto } from "./common.model";

export interface travellerDto{
    travellerId:string,
    firstName:string,
    lastName:string,
    email:string,
    userName:string,
    status:boolean,
    contactHome:string,
    contactMobile:string,
    address:string,
    reservationCount:string,
    createdDate:string,
}

export interface TravellerInformationFormDto{
    firstName:FormFieldDto<string>, 
    lastName:FormFieldDto<string>,
    email:FormFieldDto<string>,
    userName:FormFieldDto<string>,
    status:FormFieldDto<boolean>,
    contactHome:FormFieldDto<string>,
    contactMobile:FormFieldDto<string>,
    address:FormFieldDto<string>,
}