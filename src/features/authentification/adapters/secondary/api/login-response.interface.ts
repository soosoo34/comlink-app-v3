import { User } from '@features/authentification/domain/entities/user';

export interface LoginApiResponse {
  user: User;
  access_token: string;
  /*cabinet: Cabinet; // Si vous avez besoin de ces informations également*/
}

export interface LogsApiDto {
  log: string;
  password: string;
}
