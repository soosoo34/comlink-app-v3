import { DateTimeInterface } from '@src/shared/interaces/date-time.interface.ts/date-time.interface';

export interface MandatInterface {
  id: number;
  id_cabinet: number;
  id_consultant: number;
  id_point_vente: number;
  id_personne_morale_mandant: number;
  id_personne_morale_bailleur: number;
  id_contact_mandant: number;
  id_siren_mandant: number;
  id_siren_bailleur: number;
  id_contact_bailleur: number;
  id_forme_juridique: number;
  id_activite: number;
  id_rubrique_cession_pme: number;
  etat: MandatStateEnum;
  etat_murs: MandatWallEnum;
  numero_registre_mandats: string;
  exclusivite: string;
  date_debut: DateTimeInterface | null;
  date_fin: DateTimeInterface | null;
  date_archive: DateTimeInterface | null;
  titre: string;
  description: string;
  transaction: MandatTransactionEnum;
  prix_de_presentation: number;
  honoraires_vendeur: number;
  honoraires_acquereur: number;
  droits_mutation: number;
  tva: TvaAssujetiEnum;
  option_tva: TvaExprimeEnum;
  energie: number;
  climat: number;
  procedure_type: MandatProcedureEnum;
  procedure_date_limite: DateTimeInterface | null;
  procedure_mandataire: string;
  procedure_tel: string;
  procedure_email: string;
  commentaires: string;
  vilcespme: string;
  CPdiffusion: string;
  image: string;
  sel_leboncoin: number;
  enseigne: string;
  morale_or_physique_mandant: MoraleOrPhysiqueEnum;
  morale_or_physique_bailleur: MoraleOrPhysiqueEnum;
  created_at: DateTimeInterface | null;
  updated_at: DateTimeInterface | null;
  deleted_at: DateTimeInterface | null;
}

export enum MandatStateEnum {
  // Etat qui corresponds aux champs de la bdd
  preMandat = 'pre-mandat',
  active = 'active',
  underCompromise = 'under-compromise',
  underOffer = 'under-offer',
  judiciaryProcess = 'judiciary-process',
  prospection = 'prospection',
  archived = 'archived',
  duplicate = 'duplicate',
}

export enum MandatTransactionEnum {
  sell = 'sell',
  rent = 'rent',
}

export enum MandatWallEnum {
  free = 'free',
  busy = 'busy',
  linked = 'linked',
}

export enum MandatProcedureEnum {
  redress = 'redress',
  liquidation = 'liquidation',
}

export enum MoraleOrPhysiqueEnum {
  morale = 'morale',
  physique = 'physique',
}

export enum TvaExprimeEnum {
  exprimes_ht = 'exprimes-ht',
  exprimes_ttc = 'exprimes-ttc',
}

export enum TvaAssujetiEnum {
  assujetti = 'assujetti',
  non_assujetti = 'non-assujetti',
}

export enum TvaTauxEnum {
  taux = 20,
  taux_calcul = 1.2,
}

export enum ExclusiviteEnum {
  exclusif = 'OUI',
  non_exclusif = 'NON',
}
