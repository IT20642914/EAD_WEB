import { FormFieldDto, OptionsDto } from "./common.model";
import { HierarchyDto } from "./users.model";

export interface PermissionDto {
  type: string;
  description: string;
}



export interface UserByDeptDto {
  id: number;
  name: string;
}

interface UserPermissionsDto {
  type: string;
  description: string;
}

export interface UserRolesEntitlementsDto {
  id: number;
  name: string;
  permissions: UserPermissionsDto[];
}
export interface AssignRolesforUsersParamDto {
  userId: number[];
  roleId: number;
}

export interface EditRolesforusersParamDto {
  userId: number;
  roleId: number;
}

export interface GetAllUsersWithEntitlementsDTO {
  id: string;
  name: string;
  roleId: string;
  roleName: string;
  hierarchy: hierarchyDto[];
  entitlements: entitlementsDto[];
}

export interface hierarchyDto {
  id: string;
  type: string;
  name: string;
  parent: string;
}

export interface entitlementsDto {
  id: string;
  entitlements: string;
}

export interface GetAllUsersWithEntitlementParam {
  pagination: number;
  pageNumber: number;
  pending?: boolean;
}

export interface GetSelectedUserDetailsByIdDto {
  roleId: number;
  roleName: string;
  username: string;
  hierachies: userHierarchyDto[];
}

export interface userHierarchyDto {
  id: number;
  name: string;
  typeId: number;
  type: string;
}

export interface entitlementscheckDto{
  entitlement: string;
  checked: boolean;
}
export interface GetRolesAndEntitlementDto {
  userId: string;
  firstName: string;
  lastName:string;
  roleId: string;
  roleName: string;
  permissions: permissions[]
  hierarchy: HierarchyDto[];
  nic: string;
  plant:string;
  sbu:string;
  department:string;
  contactNumber:string;
  homeContactNumber:string;
  emailId: string;
  address:string
  isActive: boolean;
}
export interface permissions{
  type:string,
  description:string
}
export interface hierarchiesDTO {
  id: string;
  name: string;
  typeId: string;
  type: string;
}
export interface userIDParm {
  userID: string;
}
export interface emailId {
    emailId: string;
  }
  