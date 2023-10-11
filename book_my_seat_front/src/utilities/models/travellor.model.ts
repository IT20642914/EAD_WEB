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
}

export interface TravelerInformationFormDto {
  identificationCard: FormFieldDto<string>;
  firstName: FormFieldDto<string>;
  lastName: FormFieldDto<string>;
  email: FormFieldDto<string>;
  isActive: FormFieldDto<boolean>;
  contactHome: FormFieldDto<string>;
  contactMobile: FormFieldDto<string>;
  address: FormFieldDto<string>;
  userRole: FormFieldDto<OptionsDto>;
}
