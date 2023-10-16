import { FormFieldDto } from "./common.model";
import { PermissionDto } from "./permission.model";

export interface AuthorizedUserDto {
  userId: number;
  firstName: string;
  lastName: string;
  roleId: number;
  roleName: string;
  emailId: string;
  isActive: boolean;
  nic: string;
  contactNumber: string;
  homeContactNumber:string;
  permissions: PermissionDto[];
  plant:string;
  sbu:string;
  department:string;
  address:string;
}

// export interface UsrInfoDto {
//   userId: number;
//   firstName: string;
//   lastName: string;
//   roleId: number;
//   roleName: string;
//   emailId: string;
//   isActive: boolean;
//   nic: string;
//   contactNumber: string;
//   homeContactNumber:string;
//   address:string;
// }



export interface LoginFormDto {
  userName:FormFieldDto<string>, 
  passWord:FormFieldDto<string>, 
}

export interface userRole {
  roleID: number;
  roleName: string;
}