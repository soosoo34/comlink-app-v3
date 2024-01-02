import { DateTimeInterface } from '@src/shared/interaces/date-time.interface.ts/date-time.interface';

export enum SalePointCharge {
  lessor = 'lessor',
  tenant = 'tenant',
}

export interface SalePointInterface {
  id: number;
  id_cabinet: number;
  enseigne: string;
  url: string;
  place_id: string;
  street_number: number;
  formatted_address: string;
  type_voie: string;
  route: string;
  comp_adresse: string;
  administrative_area_level_1: string; // Département
  administrative_area_level_2: string; // Région
  postal_code: number;
  locality: string;
  latitude: number;
  longitude: number;
  surface_totale: number;
  surface_commerciale: number;
  surface_annexe: number;
  surface_bureaux: number;
  surface_terrain: number;
  surface_terrasse: number;
  lineaire: number;
  hauteur_sous_plafond: number;
  nombre_bureaux: number;
  echeance_bail: string | Date;
  depot_garantie: string;
  accessibilite_pmr: boolean;
  acces_pl: boolean;
  quai_dechargement: boolean;
  copropriete: boolean;
  foncier_a_charge: SalePointCharge;
  montant_foncier: number;
  total_produits_exploit: number;
  ca: number;
  montant_ebe: number;
  achats: number;
  variation_stock: number;
  charges_externes: number;
  loyer_annuel: number;
  charges_locatives: number;
  impots: number;
  salaires_total: number;
  salaires_exploitant: number;
  charges_sociales_total: number;
  charges_sociales_exploitant: number;
  amortissements: number;
  autres_charges: number;
  prix_negocie: number;
  hono_juridique: number;
  hono_agence: number;
  frais_agencement: number;
  stocks: number;
  bfr: number;
  apport_client: number;
  taux_interet_emprunt: number;
  retraite_ca: number;
  retraite_ca_n1: number;
  retraite_ca_n2: number;
  retraite_achats: number;
  retraite_achats_n1: number;
  retraite_achats_n2: number;
  retraite_charges_externes: number;
  retraite_charges_externes_n1: number;
  retraite_charges_externes_n2: number;
  retraite_impots: number;
  retraite_impots_n1: number;
  retraite_impots_n2: number;
  retraite_salaires: number;
  retraite_salaires_n1: number;
  retraite_salaires_n2: number;
  retraite_charges_sociales: number;
  retraite_charges_sociales_n1: number;
  retraite_charges_sociales_n2: number;
  retraite_autre_charges: number;
  retraite_autre_charges_n1: number;
  retraite_autre_charges_n2: number;
  presence_extraction: boolean;
  created_at: DateTimeInterface | null;
  updated_at: DateTimeInterface | null;
  deleted_at: DateTimeInterface | null;
  provision_mensuel: boolean;
  provision_tva: boolean;
  revision_annuelle: boolean;
}
