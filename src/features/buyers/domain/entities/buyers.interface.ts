import { DateTimeInterface } from '@src/shared/interaces/date-time.interface.ts/date-time.interface';

export enum BuyerCurrentActionEnum {
  new = 'new',
  relance = 'relance',
  rdv = 'rdv',
  toFollow = 'follow',
}

export enum BuyerStateEnum {
  archived = 'archived',
  active = 'actif',
  compromis = 'compromis',
  offre = 'offre',
  untreated = 'untreated',
}

export interface BuyerInterface {
  id: number;
  id_cabinet: number;
  id_contact: number;
  id_consultant: number;
  id_activite: number;
  enseigne: string;
  etat: string;
  action_en_cours: string;
  date_derniere_action: Date;
  mail_frequency: number;
  last_sent_mail: DateTimeInterface;
  apport: number;
  origin: string;
  surface_min: number;
  surface_max: number;
  premier_contact: string;
  commentaires_consultant: string;
  secteur: string;
  experience_pro: string;
  associe: string;
  commentaires_archive: string;
  date_archive: DateTimeInterface;
  created_at: DateTimeInterface;
  updated_at: DateTimeInterface;
  deleted_at: DateTimeInterface;
}
