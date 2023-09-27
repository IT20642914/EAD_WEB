import { AlertDto } from ".";

export interface AlertStateDto {
    notifications: AlertDto[];
  }

export interface ApplicationStateDto {
    alert: AlertStateDto;
  }
