import {DateTimeInterface} from '@src/shared/interaces/date-time.interface.ts/date-time.interface';


export enum ContactCivilityEnum {
  mr = 'mr',
  mrs = 'mrs',
}

export interface ContactInterface {
  id: number;
  id_cabinet: number;
  nom: string;
  prenom: string;
  civilite: ContactCivilityEnum;
  email: string;
  telephone: string;
  mobile: string;
  fax: string;
  place_id: string;
  street_number: number;
  indice: number;
  formatted_address: string;
  lat: number;
  lng: number;
  url: string;
  adresse_de_recherche: string;
  type_voie: string;
  route: string;
  comp_adresse: string;
  administrative_area_level_1: string;
  administrative_area_level_2: string;
  isNew: boolean;
  postal_code: string;
  locality: string;
  contactConnu: boolean;
  created_at: DateTimeInterface;
  updated_at: DateTimeInterface;
  deleted_at: DateTimeInterface;
}



