import { FormFieldDto, OptionsDto } from "./common.model";


export interface PermissionDto {
  type: string;
  description: string;
}


export interface entitlementscheckDto{
  entitlement: string;
  checked: boolean;
}

export interface permissions{
  type:string,
  description:string
}

export interface userIDParm {
  userID: string;
}
export interface emailId {
    emailId: string;
  }
  