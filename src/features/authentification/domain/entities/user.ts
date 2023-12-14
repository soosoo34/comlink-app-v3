import { DateTimeInterface } from '@src/shared/date-time.interface.ts/date-time.interface';

export interface User {
  id: number;
  id_cabinet: number;
  email: string;
  password: string;
  challenge: number;
  role: string;
  intitule: string;
  couleur: string;
  civilite: string;
  prenom: string;
  nom: string;
  tel: string;
  niveau: number;
  created_at: DateTimeInterface;
  updated_at: DateTimeInterface;
  deleted_at: DateTimeInterface;
}
