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
  hierarchy: HierarchyDto[];
  permissions: PermissionDto[];
  plant:string;
  sbu:string;
  department:string;
  address:string;
}

export interface UsrInfoDto {
  userId: number;
  firstName: string;
  lastName: string;
  roleId: number;
  roleName: string;
  emailId: string;
  isActive: boolean;
  nic: string;
  contactNumber: string;
  hierarchy: HierarchyDto[];
  permissions: PermissionDto[];
  homeContactNumber:string;
  plant:string;
  sbu:string;
  department:string;
  address:string;
}

export interface HierarchyDto {
  id: number,
  name: string,
  typeId: number,
  type: string
}
