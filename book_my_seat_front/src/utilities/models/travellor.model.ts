import { FormFieldDto, OptionsDto } from "./common.model";
import { userRole } from "./users.model";

export interface travelerDto {
  travelerId: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  contactHome: string;
  contactMobile: string;
  address: string;
  totalReservationCount: number;
  createdDate: string;
  roleType:userRole;
  nicNumber:string;
  passWord:string;
}

export interface TravelerInformationFormDto {
  travelerId:FormFieldDto<string>;
  nICNumber: FormFieldDto<string>;
  password: FormFieldDto<string>;
  firstName: FormFieldDto<string>;
  lastName: FormFieldDto<string>;
  email: FormFieldDto<string>;
  isActive: FormFieldDto<boolean>;
  contactHome: FormFieldDto<string>;
  contactMobile: FormFieldDto<string>;
  address: FormFieldDto<string>;
  roleType: FormFieldDto<OptionsDto>;
  createdDate: FormFieldDto<string>;
  totalReservationCount:FormFieldDto<number>;
}

export interface LoginDto{
  nic:string;
  password:string;
}
export interface LoginResponseDto{
  isSuccess:boolean;
  message:string;
  statusCode:number;
  traveler:travelerDto|null;
}


